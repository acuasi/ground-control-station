var mavlink = require("mavlink_ardupilotmega_v1.0"),
	fs = require('fs');

var messages = fs.readFileSync(process.argv[2]);
var mavlinkParser = new mavlink();
mavlinkParser.on('message', function(message) {
	console.log(message);
});
mavlinkParser.pushBuffer(messages);
mavlinkParser.parseBuffer();