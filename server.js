var SerialPort = require("serialport").SerialPort,
  mavlink = require("./assets/js/libs/mavlink_ardupilotmega_v1.0.js"),
  fs = require('fs'),
  express = require('express'),
  routes = require('./routes'),
  app = express(),
  http = require('http'),
  nowjs = require("now"),
  path = require('path'),
  nconf = require("nconf"),
  requirejs = require("requirejs"),
  winston = require("winston"),
  util   = require('util'),
  colors = require('colors'),
  child = require("child_process");

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    //nodeRequire: require,
    baseUrl: './app'
});

// Logger
var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.File)({ filename: 'mavlink.dev.log' })
  ]
});

var mavlinkParser = new MAVLink(logger);

// Fetch configuration information.
nconf.argv().env().file({ file: 'config.json' });

/*
 * The main Arduino constructor
 * Connect to the serial port and bind
 */
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
      });*/

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
        }*/

        self.emit('ready');
      }, 500);
    }
  });
};

/*
 * EventEmitter, I choose you!
 */
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

/*
 * Logger utility function
 */
UsbConnection.prototype.log = function (/*level, message*/) {
  var args = [].slice.call(arguments);
  if (this.debug) {
    console.log(String(+new Date()).grey + ' duino '.blue + args.shift().magenta + ' ' + args.join(', '));
  }
};

//masterSerial = detect(nconf.get('serial:baudrate'));
/*new SerialPort(
  nconf.get('serial:device'),
  { baudrate: nconf.get('serial:baudrate') }
);*/
masterSerial = new UsbConnection();


app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);

// We need to take care with syntax when using Express 3.x and Socket.io.
// https://github.com/Flotype/now/issues/200
var server = http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});

// Set up connections between clients/server
var everyone = nowjs.initialize(server);



requirejs(["Models/Platform"], function(Platform) {

  // Debugging
  mavlinkParser.on('message', function(message) {
    console.log(message);
    //everyone.now.updatePlatform();
  });

  var platform = {};
  
  // This won't scale =P still
  // But it's closer to what we want to do.
  mavlinkParser.on('HEARTBEAT', function(message) {
    platform = _.extend(platform, {
      type: message.type,
      autopilot: message.autopilot,
      base_mode: message.base_mode,
      custom_mode: message.custom_mode,
      system_status: message.system_status,
      mavlink_version: message.mavlink_version
    });
    everyone.now.updatePlatform(platform);
  });

  mavlinkParser.on('GLOBAL_POSITION_INT', function(message) {
    platform = _.extend(platform, {
      lat: message.lat/10000000,
      lon: message.lon/10000000,
      alt: message.alt/1000,
      relative_alt: message.relative_alt/1000,
      vx: message.vx/100,
      vy: message.vy/100,
      vz: message.vz/100,
      hdg: message.hdg/100
    });
    everyone.now.updatePlatform(platform);
  });

  mavlinkParser.on('SYS_STATUS', function(message) {
    platform = _.extend(platform, {
      voltage_battery: message.voltage_battery,
      current_battery: message.current_battery,
      battery_remaining: message.battery_remaining,
      drop_rate_comm: message.drop_rate_comm,
      errors_comm: message.errors_comm
    });
    everyone.now.updatePlatform(platform);
  });

  mavlinkParser.on('ATTITUDE', function(message) {
    platform = _.extend(platform, {
      pitch: message.pitch,
      roll: message.roll,
      yaw: message.yaw,
      pitchspeed: message.pitchspeed,
      rollspeed: message.rollspeed,
      yawspeed: message.yawspeed
    });
    everyone.now.updatePlatform(platform);
  });

  mavlinkParser.on('VFR_HUD', function(message) {
    platform = _.extend(platform, {
      airspeed: message.airspeed,
      groundspeed: message.groundspeed,
      heading: message.heading,
      throttle: message.throttle,
      climb: message.climb
    });
    everyone.now.updatePlatform(platform);

  });

  mavlinkParser.on('GPS_RAW_INT', function(message) {
    platform = _.extend(platform, {
      fix_type: message.fix_type,
      satellites_visible: message.satellites_visible
    });
    everyone.now.updatePlatform(platform);
  });

}); // end scope of requirejs
