/*
Waypoint state manager.
*/
var _ = require('underscore');

// Logging object (winston)
var log;

// Reference to the mavlink protocol object
var mavlink;

// Reference to the instantiated mavlink object, for access to target system/component.
var mavlinkParser;

// This really needs to not be here.
var uavConnection;

// Handler when the ArduPilot requests individual waypoints: upon receiving a request,
// Send the next one.
function missionRequestHandler(missionItemRequest) {
	mavlinkParser.send(missionItems[missionItemRequest.seq], uavConnection);
}

function missionAckHandler(ack) {
	log.info('Received mission ack, mission items loaded onto payload.');
}


// Mapping from numbers (as those stored in waypoint files) to MAVLink commands.
var commandMap;

// Waypoints, an ordered array of waypoint MAVLink objects
var missionItems = [];

// Mission object constructor
MavMission = function(mavlinkProtocol, mavlinkProtocolInstance, uavConnectionObject, logger) {

	log = logger;
	mavlink = mavlinkProtocol;
	mavlinkParser = mavlinkProtocolInstance;
	uavConnection = uavConnectionObject;

}

util.inherits(MavMission, events.EventEmitter);

// http://qgroundcontrol.org/mavlink/waypoint_protocol
MavMission.prototype.sendToPlatform = function() {

	// send mission_count
	var missionCount = new mavlink.messages.mission_count(mavlinkParser.srcSystem, mavlinkParser.srcComponent, missionItems.length);
	mavlinkParser.send(missionCount, uavConnection);

	// attach mission_request handler, let it cook
	mavlinkParser.on('MISSION_REQUEST', missionRequestHandler);
	
	var self = this;
	// If the ack is OK, signal OK; if not, signal an error event
	mavlinkParser.on('MISSION_ACK', function(ack) {
		if(mavlink.MAV_MISSION_ACCEPTED === ack.type) {
			self.emit('mission:loaded');
		} else {
			throw new Error('Unexpected mission acknowledgement received in mavMission.js');
		}
	});
};

// MissionItemMessage is a MAVLink MessageItem object
MavMission.prototype.addMissionItem = function(missionItemMessage) {
	if( _.isUndefined(missionItemMessage)) {
		throw new Error('Undefined message item in MavMission.addMissionItem!');
	}
	missionItems[missionItemMessage.seq] = missionItemMessage;
};

MavMission.prototype.clearMission = function(first_argument) {
	missionItems = [];
	var missionClearAll = new mavlink.messages.mission_clear_all(mavlinkParser.srcSystem, mavlinkParser.srcComponent);
	mavlinkParser.send(missionClearAll);
};

MavMission.prototype.loadMission = function() {
	loadMission(this);
};

MavMission.prototype.getMissionItems = function() {
	return missionItems;
}

// Stub for initial development/testing
loadMission = function(mission) {
	mission.clearMission();

	_.each(missionItemsQuadTesting, function(e, i, l) {
		// target_system, target_component, seq, frame, command, current, autocontinue, param1, param2, param3, param4, x, y, z
		mi = new mavlink.messages.mission_item(
			mavlinkParser.srcSystem,
			mavlinkParser.srcComponent,
			e[0],    // seq
			e[2],    // frame
			e[3],    // command
			e[1],    // current
			e[11],   // autocontinue
			e[4],  // param1,
			e[5],  // param2,
			e[6],  // param3
			e[7],  // param4
			e[8],  // x (latitude
			e[9],  // y (longitude
			e[10]  // z (altitude
		);
		mission.addMissionItem(mi)
	});

	mission.sendToPlatform();
};

// Shim for testing mission
var missionItemsTesting = [
[0,1,3,0,0.000000,0.000000,0.000000,0.000000,-35.362881,149.165222,582.000000,1],
[1,0,3,16,0.000000,0.000000,0.000000,0.000000,-35.362324,149.164291,120.000000,1],
[2,0,3,16,0.000000,0.000000,0.000000,0.000000,-35.363670,149.164505,120.000000,1],
[3,0,3,16,0.000000,0.000000,0.000000,0.000000,-35.362358,149.163651,120.000000,1],
[4,0,3,16,0.000000,0.000000,0.000000,0.000000,-35.363777,149.163895,120.000000,1],
[5,0,3,16,0.000000,0.000000,0.000000,0.000000,-35.362411,149.163071,120.000000,1],
[6,0,3,16,0.000000,0.000000,0.000000,0.000000,-35.363865,149.163223,120.000000,1],
[7,0,3,16,0.000000,0.000000,0.000000,0.000000,-35.362431,149.162384,120.000000,1],
[8,0,3,16,0.000000,0.000000,0.000000,0.000000,-35.363968,149.162567,120.000000,1],
[9,0,3,20,0.000000,0.000000,0.000000,0.000000,-35.363228,149.161896,30.000000,1]
];

// Another shim for testing quadcopter
var missionItemsQuadTesting = [
//QGC,WPL,110
//s,fr,ac,cmd,p1,p2,p3,p4,lat,lon,alt,continue
[0,1,3,16,0.000000,0.000000,0.000000,0.000000,-35.362881,149.165222,582,1],

//,takeoff
[1,0,3,22,0.000000,0.000000,0.000000,0.000000,-35.362881,149.165222,20,1],

//,MAV_CMD_NAV_WAYPOINT,A
//,Hold,sec,Hit,rad,empty,Yaw,angle,lat,lon,alt,continue
[2,0,3,16,0,3,0,0,-35.363949,149.164151,20,1],

//,MAV_CMD_CONDITION_YAW
//,delta,deg,sec,Dir,1=CW,Rel/Abs,Lat,lon,Alt,continue
[3,0,3,115,640,20,1,1,0,0,0,1],

//,MAV_CMD_NAV_LOITER_TIME
//,seconds,empty,rad,Yaw,per,Lat,lon,Alt,continue
[4,0,3,19,35,0,0,1,0,0,20,1],

//,MAV_CMD_NAV_WAYPOINT,B
//,Hold,sec,Hit,rad,empty,Yaw,angle,lat,lon,alt,continue
[5,0,3,16,0,3,0,0,-35.363287,149.164958,20,1],

//,MAV_CMD_NAV_LOITER_TURNS
//,Turns,lat,lon,alt,continue
//6,0,3,18,2,0,0,0,0,0,20,1

//,MAV_CMD_DO_SET_ROI,,MAV_ROI_WPNEXT,=,1
//,MAV_ROI,WP,index,ROI,index,lat,lon,alt,continue
[7,0,3,201,1,0,0,0,0,0,0,1],

//,MAV_CMD_NAV_WAYPOINT,C
//,Hold,sec,Hit,rad,empty,Yaw,angle,lat,lon,alt,continue
[8,0,3,16,0,3,0,0,-35.364865,149.164952,20,1],

//,MAV_CMD_CONDITION_DISTANCE
//,meters,continue
[9,0,3,114,100,0,0,0,0,0,0,1],

//,MAV_CMD_CONDITION_CHANGE_ALT
//,climb_rate,alt,continue
[10,0,3,113,0,0,0,0,0,0,40,1],

//,MAV_CMD_NAV_WAYPOINT,D
//,Hold,sec,Hit,rad,empty,Yaw,angle,lat,lon,alt,continue
[11,0,3,16,0,3,0,0,-35.363165,149.163905,20,1],

//,MAV_CMD_NAV_WAYPOINT,E
//,Hold,sec,Hit,rad,empty,Yaw,angle,lat,lon,alt,continue
[12,0,3,16,0,3,0,0,-35.363611,149.163583,20,1],

//,MAV_CMD_DO_JUMP
//,seq//,repeat,.,.,.,.,.,continue
[13,0,3,177,11,3,0,0,0,0,0,1],

//,MAV_CMD_NAV_RETURN_TO_LAUNCH
//,.,.,.,.,alt,continue
[14,0,3,20,0,0,0,0,0,0,20,1],

//,MAV_CMD_NAV_LAND
//
[15,0,3,21,0,0,0,0,0,0,0,1],

//,WP_total,=,10
//,0,=,home

//,seq
//,current
//,frame
//,command
//,param1,
//,param2,
//,param3
//,param4
//,x,(latitude)
//,y,(longitude)
//,z,(altitude)
//,autocontinue

];

// Static placeholder for a mission to test

/*
# seq
# frame
# action
# current
# autocontinue
 # param1,
 # param2,
 # param3
 # param4
 # x, latitude
 # y, longitude
  # z
  */

module.exports = MavMission;