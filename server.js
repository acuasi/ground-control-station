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
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
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

mavlinkParser.on('message', function(message) {
  console.log(message);
});

// Try and parse incoming data through the serial connection
masterSerial.on('data', function(data) {
  mavlinkParser.parseBuffer(data);
});