var SerialPort = require("serialport").SerialPort
  , mavlink = require("./lib/mavlink_ardupilotmega_v1.0.js")
  , fs = require('fs');

global.masterSerial = new SerialPort('/dev/tty.usbserial-A900XUV3', {
  baudrate: 57600
});

outfile = fs.openSync('binary-capture', 'w+');

global.mavlinkParser = new MAVLink();

global.masterSerial.on('data', function(data) {
  fs.writeSync(outfile, data, 0, data.length);
  console.log(global.mavlinkParser.parseBuffer(data));
});