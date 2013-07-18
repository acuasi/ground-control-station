var udlInterface = require('../udlInterface.js'),
	mavlink = require('mavlink_ardupilotmega_v1.0'),
	Q = require('q'),
	jspack = require('jspack').jspack,
	dgram = require('dgram');

var log; // populated when object is created, expects Winston log object
var config; // set when object is instantiated, nconf instance

function quadcopterUdl(logger, configObject) {
	log = logger;
	config = configObject;
};

util.inherits(quadcopterUdl, udlInterface);

// MAVLink protocol implementation for parsing/sending messages over the wire
var protocol;

quadcopterUdl.prototype.setProtocol = function(protocolParser) {
	protocol = protocolParser;
};

// If the sitl parameter is true, then this function will try and trigger a communications to the SITL UDP port.
quadcopterUdl.prototype.takeoff = function() {
	//param load ArduCopter.parm
	//wp load mission2.txt
	var deferred = Q.defer();

	return this.arm()
	.then(this.setAutoMode)
	.then(function() {
		
		log.info('Quadcopter UDL: sending takeoff command...')

		if(true === config.get('sitl:active')) {
			log.info('Quadcopter UDL: sending SITL command for takeoff...')

			try {
				var sitlUdp = dgram.createSocket('udp4');
				var buf = new Buffer(jspack.Pack('<HHHHHHHH', [0, 0, 1510, 0, 0, 0, 0, 0])); // 1510 to RC3 launches the quad.
				sitlUdp.send(buf, 0, buf.length, config.get('sitl:port'), config.get('sitl:host'), function(err, bytes) {
					throw(err);
				});
			} catch(e) {
				console.log(e);
				log.error(e);
			}

		} else {

			var command_long = mavlink.messages.command_long(1, 1, mavlink.MAV_CMD_NAV_TAKEOFF, 0, 0, 0, 0, 0, 0, 0, 0);
			protocol.send(command_long);

		
		}
		
		
		return deferred.resolve();
	});

	return deferred.promise;

};

quadcopterUdl.prototype.arm = function() {
	var deferred = Q.defer();
	log.info('Quadcopter UDL: arming quadcopter...');
	
	protocol.on('HEARTBEAT', function callback(msg) {
		try {
			if(msg.base_mode & mavlink.MAV_MODE_FLAG_DECODE_POSITION_SAFETY) {
				protocol.removeListener('HEARTBEAT', callback);
				deferred.resolve();
			}
		} catch(e) {
			console.log(e);
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
	log.info('Quadcopter UDL: setting auto mode...');

	var deferred = Q.defer();

	try {
		protocol.on('HEARTBEAT', function confirmAutoCommandAck(msg) {
		// todo: determine how to test that this is valid or not?
		// instead check out this mapping (in mavutil;py):
		// mode_mapping_acm = {
		//     0 : 'STABILIZE',
		//     1 : 'ACRO',
		//     2 : 'ALT_HOLD',
		//     3 : 'AUTO',
		//     4 : 'GUIDED',
		//     5 : 'LOITER',
		//     6 : 'RTL',
		//     7 : 'CIRCLE',
		//     8 : 'POSITION',
		//     9 : 'LAND',
		//     10 : 'OF_LOITER',
		//     11 : 'APPROACH'
		//     }
		if(true) {
			protocol.removeListener('HEARTBEAT', confirmAutoCommandAck);
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

// quadcopterUdl.prototype.loiter = function() {
// 	log.info('Quadcopter UDL: setting loiter mode');

// 	var deferred = q.defer();
// 	try {
// 		protocol.on('HEARTBEAT', function confirmLoiterMode(msg) {
// 			console.log(msg);
// 			// 5 is the magic number associated in MavProxy with the loiter mode -- need docs on this
// 			if(msg.custom_mode === 5) {
// 				protocol.removeListener('HEARTBEAT', confirmLoiterMode);
// 				deferred.resolve();	
// 			}
			
// 		}
// 	}

// 	var command_long = mavlink.messages.command_long(1, 1, mavlink.MAV_CMD_NAV_LOITER_UNLIM, 0, 0, 0, 0, 0, 0, 0, 0);
// 	protocol.send(command_long);
// 	return deferred.promise;
// };

quadcopterUdl.prototype.flyToPoint = function(lat, lon) {
	var deferred = q.defer();

};

module.exports = quadcopterUdl;