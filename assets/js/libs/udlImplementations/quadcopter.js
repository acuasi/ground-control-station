var udlInterface = require('../udlInterface.js'),
	mavlink = require('mavlink_ardupilotmega_v1.0'),
	Q = require('q'),
	jspack = require('jspack'),
	dgram = require('dgram');

var sitlUdp = dgram.createSocket('udp4');

function quadcopterUdl() {};
util.inherits(quadcopterUdl, udlInterface);

// MAVLink protocol implementation for parsing/sending messages over the wire
var protocol;

quadcopterUdl.prototype.setProtocol = function(protocolParser) {
	protocol = protocolParser;
};

quadcopterUdl.prototype.takeoff = function() {
	//param load ArduCopter.parm
	//wp load mission2.txt
	var deferred = Q.defer();

	return this.arm()
	.then(this.setAutoMode)
	.then(function() {
		
		console.log('sending RC override...')
		
		// Hacked in place for SITL.
		var buf = jspack.pack('<HHHHHHHH', [0, 0, 1510, 0, 0, 0, 0, 0]);
		sitlUdp.send(buf, 0, buf.length, 5501, '172.16.76.100', function(err, bytes) {
			console.log(err);
			console.log(bytes);
			console.log('I SENT IT')
		});

		console.log('got this far');

		//var rc_override = new mavlink.messages.rc_channels_override(1, 1, 1520, -1, 1100, -1, -1, -1, -1, -1);
		var rc_override = new mavlink.messages.rc_channels_override(1, 1, 1500, 1500, 1900, 1500, 1500, 1500, 1500, 1500);
		var rc_override_send = _.partial(_.bind(protocol.send, protocol), rc_override);
		setInterval(rc_override_send, 50);
		return deferred.resolve();
	});

	return deferred.promise;

};

quadcopterUdl.prototype.arm = function() {
	var deferred = Q.defer();
	console.log('arming!')

	protocol.on('HEARTBEAT', function(msg) {
		if(msg.base_mode & mavlink.MAV_MODE_FLAG_DECODE_POSITION_SAFETY) {
			deferred.resolve();
		}
	});

	var command_long = new mavlink.messages.command_long(
		1, // target system
		mavlink.MAV_COMP_ID_SYSTEM_CONTROL, // target_component
		mavlink.MAV_CMD_COMPONENT_ARM_DISARM, // command
		0, // confirmation
		1, // param1 (1 to indicate arm)
		0, // param2 (all other params meaningless)
		0, // param3
		0, // param4
		0, // param5
		0, // param6
		0); // param7
	protocol.send(command_long);

	return deferred.promise;

};

quadcopterUdl.prototype.setAutoMode = function() {
	console.log('setting auto mode!');

	var deferred = Q.defer();

	try {
		protocol.on('COMMAND_ACK', function(msg) {
		if(true) {
			console.log('YEP GOT IT AUTO MODE WOO')
			deferred.resolve();
		}
	});
	
	} catch(e) {
		console.log(e);
	}
	
	var command_long = new mavlink.messages.command_long(1, 1, mavlink.MAV_CMD_MISSION_START, 0, 0, 0, 0, 0, 0, 0, 0);
	protocol.send(command_long);
	return deferred.promise;

};

module.exports = quadcopterUdl;