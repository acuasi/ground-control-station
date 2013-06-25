var util = require('util'),
	_ = require('underscore');

// Private references to shared resources
var mavlink;
var mavlinkParser;
var uavConnection;
var log;

// System state/status
var state = {};
var newState = {}; // Used to compare existing and updated state

function MavFlightMode(mavlinkObject, mavlinkParserObject, uavConnectionObject, logger) {
	mavlink = mavlinkObject;
	mavlinkParser = mavlinkParserObject;
	uavConnection = uavConnectionObject;
	log = logger;
	this.attachHandlers();
}

util.inherits(MavFlightMode, events.EventEmitter);

MavFlightMode.prototype.attachHandlers = function() {
	var self = this;
	mavlinkParser.on('HEARTBEAT', _.debounce(function(heartbeat) {

		// This one will change to take more things into account than simply auto/non-auto, so just a basic sketch, here
		newState.mode = ( mavlink.MAV_MODE_FLAG_AUTO_ENABLED & heartbeat.base_mode ) ? 'Auto' : 'Manual';

		// Translate the bitfields for use in the client.
		newState.auto = ( mavlink.MAV_MODE_FLAG_AUTO_ENABLED & heartbeat.base_mode ) ? true : false;
		newState.guided = ( mavlink.MAV_MODE_FLAG_GUIDED_ENABLED & heartbeat.base_mode ) ? true : false;
		newState.stabilize = ( mavlink.MAV_MODE_FLAG_STABILIZE_ENABLED & heartbeat.base_mode ) ? true : false;
		newState.manual = ( mavlink.MAV_MODE_FLAG_MANUAL_INPUT_ENABLED & heartbeat.base_mode ) ? true : false;
		newState.armed = ( mavlink.MAV_MODE_FLAG_SAFETY_ARMED & heartbeat.base_mode ) ? true : false;

		
		//if(false === _.isEqual(state, newState)) {
			self.emit('change', state);
		
		//}

		state = newState;

	}), 1000);
};

MavFlightMode.prototype.getState = function() {
	return state;
};

module.exports = MavFlightMode;