/*
This module is responsible for managing the overall status and health of the UAV connection.
This has two different layers of purpose:
- detect and manage the socket
- handle MAVLink connection
*/

var SerialPort = require("serialport").SerialPort,
  util   = require('util'),
  child = require("child_process"),
  dgram = require("dgram"),
  net = require('net'),
  _ = require('underscore');

// config is an nconf instance
var config = undefined;

// connection represents the socket-level connection through which MAVLink arrives
var connection = undefined;

// name of the message the connection uses to signal that new data is ready to consume
var dataEventName = undefined;

// state points to one of the objects defined below, determining what action to take on heartbeat
var state = undefined;

// protocol is the parser for the incoming binary stream (MAVLink)
var protocol = undefined;

// this flag is set to true if the event listener must be reattached to the connection, in case
// the connection itself was lost
var attachDataEventListener = true;

// Variables related to the timeout/health of the heartbeat
var lastHeartbeat = undefined;

// This function is defined once in the larger scope so that it can be invoked directly a single time
var fetch_params = _.once(_.bind(function(done) {
  
  console.log('Starting to fetch params...');
  
  // Fetch the params from the APM, wait to exit this state until finished.
  param_request = new mavlink.messages.param_request_list(1, 1); // target system/component IDs
  _.extend(param_request, {
    srcSystem: 255,
    srcComponent: 0
  });

  p = new Buffer(param_request.pack());
  connection.write(p);

  // Listen for parameters
  protocol.on('PARAM_VALUE', _.bind(function(message) {
    apmConfig[message.param_id] = message.param_value;
    if( _.keys(apmConfig).length == 270 ) {
      console.log('...finished fetching parameters.');
      console.log(apmConfig);
      done();
    }

  }, this));

}, this));

// Stores the configuration values for the APM.
var apmConfig = {};

var states = {
    // The disconnected state represents when there is no socket connection
    disconnected: {
      heartbeat: function() {
        
        console.log('trying to connect from disconnected state...');

        try {

          switch(config.get('connection')) {
            case 'udp':

              connection = dgram.createSocket("udp4");
              dataEventName = 'message';

              // When the socket confirms its listening, change state to try and collect MAVLink configuration
              connection.on("listening", _.bind(function () {
                console.log("UDP connection established on " + address.address + ":" + address.port);
                var address = connection.address();
                changeState(states.connecting)
              }, this));

              connection.bind(14550);
              break;

              case 'tcp':
                dataEventName = 'data';
                connection = net.createConnection({port: 5760}, _.bind(function() {
                  // 'connect' event listener
                  console.log('TCP connection established on 127.0.0.1:5760');
                  changeState(states.connecting);
                }, this));
                break;

            default:
              console.log('Connection type not understood (' + config.get('connection')+')');
          }
        } catch(e) {
          console.log(e);
        }
        
      }
    },
  
    // The connecting state attaches event handlers to the connection to establish the
    // flow of protocol data, and fetches the params from the APM.
    connecting: {
        heartbeat: function() {

          try {
            console.log('establishing MAVLink connection...');

            // If necessary, attach the message parser to the connection
            if(attachDataEventListener === true) {
                connection.on(dataEventName, _.bind(function (msg) {
                  protocol.parseBuffer(msg);
              }, this));
            }

            // When the parameters have been read, move to the connected state.
            fetch_params(function() {
              changeState(states.connected);
            });

            attachDataEventListener = false;
            
          } catch(e) {
            console.log(e);
          } 
      }
    },
  
    // Connected state watches the MAVLink heartbeat, going into alarm if the heartbeat times out
    connected: {
      heartbeat: function() {

        console.log('connected, ensuring a timeout has not happened...');
        console.log('time since last heartbeat = ' + timeSinceLastHeartbeat);

        if(timeSinceLastHeartbeat > 5000 || true === _.isNaN(timeSinceLastHeartbeat)) {
          changeState(states.disconnected);
          throw 'disconnected';
        }
      }
    }
 };


// Incoming config is an nconf instance, already read in the server code.
function UavConnection(configObject, protocolParser) {
  config = configObject;
  protocol = protocolParser;
  state = states.disconnected;

  // Establish some event bindings that don't work if bound inside the heartbeat callbacks
  protocol.on('HEARTBEAT', function(message) {
    lastHeartbeat = Date.now();
  });

  _.bindAll(this);
};

util.inherits(UavConnection, events.EventEmitter);

changeState = function(newState) {
  state = newState;
}

 UavConnection.prototype.heartbeat = function() {

  timeSinceLastHeartbeat = Date.now() - lastHeartbeat;

  try {
    state.heartbeat();
  } catch(e) {
    this.emit(e);
  }
 }

exports.UavConnection = UavConnection;


/*
 * The main Arduino constructor
 * Connect to the serial port and bind
var UsbConnection = function (options) {
  this.log('info', 'initializing');
  this.debug = options && options.debug || false;
  this.baudrate = options && options.baudrate || 115200;
  this.writeBuffer = [];

  var self = this;
  this.detect(function (err, serial) {
    if (err) {
      if(self.listeners('error').length)
        self.emit('error', err);
      //else
        //throw new Error(err);
    }else{
      self.serial = serial;
      self.emit('connected');

      self.log('info', 'binding serial events');

      // Try and parse incoming data through the serial connection
      self.serial.on('data', function(data) {
        self.log('receive', data.toString().red);
        mavlinkParser.parseBuffer(data);
      });
      /*self.serial.on('data', function(data){
        self.log('receive', data.toString().red);
        self.emit('data', data);
      });

      setTimeout(function(){
        self.log('info', 'board ready');
        //self.sendClearingBytes();

        /*if (self.debug) {
          self.log('info', 'sending debug mode toggle on to board');
          self.write('99' + self.normalizePin(0) + self.normalizeVal(1));
          process.on('SIGINT', function(){
            self.log('info', 'sending debug mode toggle off to board');
            self.write('99' + self.normalizePin(0) + self.normalizeVal(0));
            delete self.serial;
            setTimeout(function(){
              process.exit();
            }, 100);
          });
        }

        if (self.writeBuffer.length > 0) {
          self.processWriteBuffer();
        }

        self.emit('ready');
      }, 500);
    }
  });
};

/*
 * EventEmitter, I choose you!
 
util.inherits(UsbConnection, events.EventEmitter);

// Open the serial connection -- TODO, make this resiliant/trying until it finds it / GUI driven, etc.
// trying to adapt from this code:
//    https://github.com/ecto/duino/blob/master/lib/board.js

UsbConnection.prototype.detect = function(callback){
  child.exec('ls /dev | grep usb', function(err, stdout, stderr){
    console.log('Looking for a usbserial device');
    console.log("stdout: ", stdout);
      var usb = stdout.slice(0, -1).split('\n'),
          found = false,
          possible,
          temp;

      console.log("usb", usb);

      while ( usb.length ) {
        possible = usb.pop();
        console.log("possible: ", possible);

        if (possible.slice(0, 2) !== 'cu') {
          try {
            temp = new SerialPort('/dev/' + possible, {
              baudrate: 115200
            });
          } catch (e) {
            err = e;
          }
          if (!err) {
            found = temp;
            console.log('Found board at ' + temp.port);
            break;
          } else {
            err = new Error('Could not find usbserial device');
            console.log('Could not find a usbserial device');
          }
        }
      }

      callback(err, found);
    });
};
*/

/*
 * Logger utility function
 
UsbConnection.prototype.log = function (/*level, message) {
  var args = [].slice.call(arguments);
  if (this.debug) {
    console.log(String(+new Date()).grey + ' duino '.blue + args.shift().magenta + ' ' + args.join(', '));
  }
};

//masterSerial = detect(nconf.get('serial:baudrate'));
/*new SerialPort(
  nconf.get('serial:device'),
  { baudrate: nconf.get('serial:baudrate') }
);
masterSerial = new UsbConnection();
 */
