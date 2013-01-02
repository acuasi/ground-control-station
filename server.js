var SerialPort = require("serialport").SerialPort
  , mavlink = require("./lib/mavlink_ardupilotmega_v1.0.js")
  , fs = require('fs')
  , masterSerial = new SerialPort('/dev/tty.usbserial-A900XUV3', { baudrate: 57600 })
  , mavlinkParser = new MAVLink()
  , express = require('express')
  , app = express()
  , http = require('http')
  , nowjs = require("now")
  //, routes = require('./routes')
  , path = require('path')

  // Little HTML scratchpad, temporary, will remove
  , html = require('fs').readFileSync(__dirname+'/debug.html');

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('gobbleblork'));
  app.use(express.session());
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

// We need to take care with syntax when using Express 3.x and Socket.io.
// https://github.com/Flotype/now/issues/200
var server = http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
var everyone = nowjs.initialize(server);

mavlinkParser.on('message', function(message) {
  everyone.now.receiveMessage(message);
});

masterSerial.on('data', function(data) {
  mavlinkParser.parseBuffer(data);
});

// Serve the little html shim
app.get('/debug', function(req, res) {
  res.set('Content-Type', 'text/html');
  res.send(html);
});

app.get('/status', function(req, res) {
  res.render('status', { title: 'Status' } );
});