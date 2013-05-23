/**
Module for loading/saving sets of mavlink parameters.
This is a Javascript translation from the mavlink/pymavlink/mavparm.py script in the main mavlink repository.

To deal with this in an async/nonblocking way gracefully, we do this in terms of expecting acks:

1- GCS sends param set request
2- The expected ack is added to an array of outstanding acks
3 - And event bound a single time to the PARAM_VALUE message will unset any matching param_ids
4- when the event is sent, after (retries) attempts, it throws an error
TBD make #4 work

**/
var _ = require('underscore');

// Logger, passed in object constructor for common logging
var log;

// Hash of pending-expected acks
var pendingAcks = {};

// Function that globallby binds to parameter-managing events and handles them as required
function paramHandler(msg) {
    // Unset any pending incoming parameter request for the specitifed param ID.
    // There's some risk that this could get tangled if unrelated code
    // is asking for + setting the same param around the same time, but it
    // seems unlikely.
    if(pendingAcks[msg.param_id]) {
        delete pendingAcks[msg.param_id];
    }
}

// Log object is assumed to be a winston object.
function MavParams(mavlinkParser, logger) {
    
    //dict.__init__(self, args)
    log = logger;

    // some parameters should not be loaded from files
    this.exclude_load = ['SYSID_SW_MREV', 'SYS_NUM_RESETS', 'ARSPD_OFFSET', 'GND_ABS_PRESS',
                         'GND_TEMP', 'CMD_TOTAL', 'CMD_INDEX', 'LOG_LASTFILE', 'FENCE_TOTAL',
                         'FORMAT_VERSION' ];
    this.mindelta = 0.000001;

    mavlinkParser.on('PARAM_VALUE', paramHandler);

}

// Mavlink so we can invoke the message template,
// MavlinkParser so we can manage events exposed through it,
// UavConnection so we can actually trigger a send
// name = param_name
// value = value to send it
// retries = timeout in milliseconds, "defaults" to 3000
MavParams.prototype.mavset = function(mavlink, mavlinkParser, uavConnection, name, value, retries) {
    // Set default value of 3 -- TODO figure out if this is ever used in practice in the Python MAVLink
    retries = typeof retries !== 'undefined' ? retries : 3000;
    
    // Testing
    name = 'THR_MAX';
    value = 100;

    // Build PARAM_SET message to send 
    var param_set = new mavlink.messages.param_set(1, 2, name, value, 0); // extra zero = don't care about type

    // Set header properties -- fake this for now
    _.extend(param_set, {
      seq: 2,
      srcSystem: 255,
      srcComponent: 0
    });

    // Establish a handler to try and send the required packet every second until cancelled
    senderHandler[name] = setInterval( function() {
        log.info('Requesting parameter ['+name+'] be set to ['+value+']...');
        mavlinkParser.send(param_set, uavConnection);
    }, 1000);

    timoutWatcher[name] = setTimeout(function() {
        clearInterval(senderHandler[name]);
        if(pendingAcks[name]) {
            delete pendingAcks[msg.name];
            throw 'No ack returned when requesting to set param ['+name+'] to ['+value+']';
        }
        
    }, retries);
}

/*
 
    def show(self, wildcard='*'):
        '''show parameters'''
        k = sorted(self.keys())
        for p in k:
            if fnmatch.fnmatch(str(p).upper(), wildcard.upper()):
                print("%-16.16s %f" % (str(p), self.get(p)))


*/
module.exports = MavParams;
