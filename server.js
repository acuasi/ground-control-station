var SerialPort = require("serialport").SerialPort
  , mavlink = require("./lib/mavlink_ardupilotmega_v1.0.js")
  , fs = require('fs')
  , masterSerial = new SerialPort('/dev/tty.usbserial-A900XUV3', {
    baudrate: 57600
  })
  , mavlinkParser = new MAVLink()
  , express = require('express')
  , app = express()
  , http = require('http')
  , nowjs = require("now")

  // Little HTML scratchpad
  , html = require('fs').readFileSync(__dirname+'/debug.html')
  // We need to take care with syntax when using Express 3.x and Socket.io.
  // https://github.com/Flotype/now/issues/200
  , server = http.createServer(app).listen(3000, function() {
      console.log('Express server listening on port 3000');
  })
  , everyone = nowjs.initialize(server);

mavlinkParser.on('message', function(message) {
  var messageHtml = '<th scope="row">'
  + message.name+'</th>'
  + '<td>'+message.header.seq+'</td>';
  var payload = '';
  _.each(message.fieldnames, function(e) {
    payload += e + "=" + message[e] + ", ";
  });
  payload.replace(/, $/,'');
  console.log(message);
  messageHtml += '<td>'+payload+'</td>';
  everyone.now.receiveMessage(messageHtml);
});

masterSerial.on('data', function(data) {
  mavlinkParser.parseBuffer(data);
});

// Serve the little html shim
app.get('/debug', function(req, res) {
  res.set('Content-Type', 'text/html');
  res.send(html);
});
