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

// state points to one of the objects defined below, determining what action to take on heartbeat
var state = undefined;

// protocol is the parser for the incoming binary stream (MAVLink)
var protocol = undefined;

// Variables related to the timeout/health of the heartbeat
var lastHeartbeat = undefined;

var states = {
    // The disconnected state represents when there is no socket connection
    disconnected: {
      heartbeat: function() {
        
        console.log('trying to connect from disconnected state...');

        try {
          connection = dgram.createSocket("udp4");

          // When the socket confirms its listening, change state to try and collect MAVLink configuration
          connection.on("listening", _.bind(function () {
            var address = connection.address();
            console.log("server listening " + address.address + ":" + address.port);
            changeState(states.connecting)
          }, this));

          connection.bind(14550);
        } catch(e) {
          console.log(e);
        }
        
      }
    },
  
    // The connecting state attaches event handlers to the connection to establish the
    // flow of protocol data.
    connecting: {
        heartbeat: function() {

        console.log('establishing MAVLink connection...');

          // Attach the message parser here          
          connection.on("message", _.bind(function (msg, rinfo) {
            protocol.parseBuffer(msg);
          }, this));

          changeState(states.connected)
      }
    },
  
    // Connected state watches the MAVLink heartbeat, going into alarm if the heartbeat times out
    connected: {
      heartbeat: function() {

        console.log('connected, ensuring a timeout has not happened...');
        console.log('time since last heartbeat = ' + timeSinceLastHeartbeat);
        if(timeSinceLastHeartbeat > 5000) throw 'disconnected';
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
var net = require('net');
var masterSerial = net.createConnection(5760, '127.0.0.1');

masterSerial.on('data', function(data) {
  mavlinkParser.parseBuffer(data);
})
*/
/*

*/
/*
msg  = new Buffer([0xfe, 0x1e, 0x69, 0x01, 0x01, 0x18, 0xc0, 0x2c, 0x3a, 0x10, 0x00, 0x00, 0x00, 0x00, 0x2c, 0x0b, 0xec, 0xea, 0x22,
  0xc9, 0xe8, 0x58, 0x9a, 0xe9, 0x08, 0x00, 0x00, 0x00, 0xff, 0xff, 0x00, 0x00, 0x00, 0x00, 0x03, 0x00, 0x59, 0xf7])

mavlinkParser.parseBuffer(msg);
*/
/*


/*
./ArduCopter.elf
./sim_multicopter.py --home -35.362938,149.165085,584,270
./mavproxy.py --master tcp:127.0.0.1:5760 --sitl 127.0.0.1:5501 --out 127.0.0.1:14550

*/

/*

var masterSerial = net.createConnection(5760, '127.0.0.1');

masterSerial.on('data', function(data) {
  mavlinkParser.parseBuffer(data);
})
*/
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
