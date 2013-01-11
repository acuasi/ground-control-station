var SerialPort = require("serialport").SerialPort,
  mavlink = require("./assets/js/libs/mavlink_ardupilotmega_v1.0.js"),
  fs = require('fs'),
  mavlinkParser = new MAVLink(),
  express = require('express'),
  routes = require('./routes'),
  app = express(),
  http = require('http'),
  nowjs = require("now"),
  path = require('path'),
  nconf = require("nconf");

// Fetch configuration information.
nconf.argv().env().file({ file: 'config.json' });

// Open the serial connection -- TODO, make this resiliant/trying until it finds it / GUI driven, etc.
masterSerial = new SerialPort(
  nconf.get('serial:device'),
  { baudrate: nconf.get('serial:baudrate') }
);

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

// This won't scale =P
// The reason to do it this way to start with is because the final
// interface of the node-mavlink itself isn't quite locked down,
// and this code is exploratory/"known to work".
// Once we see more how these events interact with the client, we
// can surely do better.
mavlinkParser.on('HEARTBEAT', function(message) {
  everyone.now.heartbeat(message);
});
mavlinkParser.on('GLOBAL_POSITION_INT', function(message) {
  everyone.now.global_position_int(message);
});
mavlinkParser.on('SYS_STATUS', function(message) {
  everyone.now.sys_status(message);
});
mavlinkParser.on('ATTITUDE', function(message) {
  everyone.now.attitude(message);
});
mavlinkParser.on('VFR_HUD', function(message) {
  everyone.now.vfr_hud(message);
});
mavlinkParser.on('GPS_RAW_INT', function(message) {
  everyone.now.attitude(message);
});

// Try and parse incoming data through the serial connection
masterSerial.on('data', function(data) {
  mavlinkParser.parseBuffer(data);
});

mavlinkParser.on("message", function(message) {
  //everyone.now.attitude(message);
  console.log(message);
});
