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
  done();
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
    if( _.keys(apmConfig).length == message.param_count ) {
      console.log('...finished fetching parameters.');
      console.log(apmConfig);
      done();
    }
  }, this));

}, this));

// This function changes the initial requested data stream to get all data, at a rate of 1hz
var request_data_stream = _.once(_.bind(function(done) {
  request = new mavlink.messages.request_data_stream(1, 1, mavlink.MAV_DATA_STREAM_ALL, 1, 1);
  _.extend(request, {
    srcSystem: 255,
    srcComponent: 0,
    seq: 1
  });
  protocol.on('message', function(message) {
    console.log(message.name);
  }); 
  p = new Buffer(request.pack());

  console.log(p);
  connection.write(p);
}, this));

// let's fly
var command = _.bind(function(done) {
  c = new mavlink.messages.command_long(
    mavlink.MAV_CMD_NAV_WAYPOINT,
    5,
    0,
    0,
     -35.362938,
     149.165085,
     1000
  );
    _.extend(c, {
    srcSystem: 255,
    srcComponent: 0,
    seq: 2
  });
  p = new Buffer(c.pack());
  console.log(p);
  connection.write(p);

}, this);

// Stores the configuration values for the APM.
var apmConfig = {};

var states = {
    // The disconnected state represents when there is no socket connection
    disconnected: {
      heartbeat: function() {
        var attachDataEventListener = true;

        console.log('trying to connect from disconnected state...');

        try {

          switch(config.get('connection')) {
            case 'serial':
              dataEventName = 'data';
              var SerialPort = require("serialport").SerialPort
              connection = new SerialPort(
                config.get('serial:device'),
                { baudrate: config.get('serial:baudrate') }
              );
              console.log(connection)
              connection.on('open', function() {
                console.log('opened serial connection');
                changeState(states.connecting)
              })
              break;

            case 'udp':

              connection = dgram.createSocket("udp4");
              dataEventName = 'message';

              // When the socket confirms its listening, change state to try and collect MAVLink configuration
              connection.on("listening", _.bind(function () {
                var address = connection.address();
                console.log("UDP connection established on " + address.address + ":" + address.port);
                changeState(states.connecting)
              }, this));

              connection.bind(config.get('udp:port'));
              break;

              case 'tcp':
                dataEventName = 'data';
                connection = net.createConnection({port: config.get('tcp:port')}, _.bind(function() {
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
              request_data_stream();
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
        command();
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