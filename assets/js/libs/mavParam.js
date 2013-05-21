/**
Module for loading/saving sets of mavlink parameters.
This is a Javascript translation from the mavlink/pymavlink/mavparm.py script in the main mavlink repository.
**/
var _ = require('underscore');

// Logger, passed in object constructor for common logging
var log;

//import fnmatch, math, time
// Log object is assumed to be a winston object.
function MavParams(logger, dict) {
    
    //dict.__init__(self, args)
    log = logger;

    // some parameters should not be loaded from files
    this.exclude_load = ['SYSID_SW_MREV', 'SYS_NUM_RESETS', 'ARSPD_OFFSET', 'GND_ABS_PRESS',
                         'GND_TEMP', 'CMD_TOTAL', 'CMD_INDEX', 'LOG_LASTFILE', 'FENCE_TOTAL',
                         'FORMAT_VERSION' ];
    this.mindelta = 0.000001;

}

MavParams.prototype.mavset = function(mavlink, mavlinkParser, uavConnection, name, value, retries) {
    // Set default value of 3 -- TODO figure out if this is ever used in practice in the Python MAVLink
    retries = typeof retries !== 'undefined' ? retries : 3;
    
    // Testing
    name = 'THR_MAX';
    value = 100;

    // Invoke the message to send 
    var param_set = new mavlink.messages.param_set(1, 2, 'THR_MAX', 100, 0); // extra zero = don't care about type

    // Set header properties -- fake this for now
    _.extend(param_set, {
      seq: 2,
      srcSystem: 255,
      srcComponent: 0
    });
    
    var sender = function() {
        console.log('Requesting parameter ['+name+'] be set to ['+value+']...');
        mavlinkParser.send(param_set, uavConnection);

        handle = mavlinkParser.on('PARAM_VALUE', function(ack) {
            console.log('Got acknowledgement that parameter ['+ack.param_id+'] has been set to ['+ack.param_value+']');
            console.log(ack);
            console.log('VICTORY')
            console.log(handle);
            mavlinkParser.removeListener(this);
        });

    };
    
    _.once(sender());


/*    def mavset(self, mav, name, value, retries=3):
        '''set a parameter on a mavlink connection'''
        got_ack = False
        while retries > 0 and not got_ack:
            retries -= 1
            mav.param_set_send(name.upper(), float(value))
            tstart = time.time()
            while time.time() - tstart < 1:
                ack = mav.recv_match(type='PARAM_VALUE', blocking=False)
                if ack == None:
                    time.sleep(0.1)
                    continue
                if str(name).upper() == str(ack.param_id).upper():
                    got_ack = True
                    self.__setitem__(name, float(value))
                    break
        if not got_ack:
            print("timeout setting %s to %f" % (name, float(value)))
            return False
        return True
        */
}

/*
    def save(self, filename, wildcard='*', verbose=False):
        '''save parameters to a file'''
        f = open(filename, mode='w')
        k = self.keys()
        k.sort()
        count = 0
        for p in k:
            if p and fnmatch.fnmatch(str(p).upper(), wildcard.upper()):
                f.write("%-16.16s %f\n" % (p, self.__getitem__(p)))
                count += 1
        f.close()
        if verbose:
            print("Saved %u parameters to %s" % (count, filename))


    def load(self, filename, wildcard='*', mav=None):
        '''load parameters from a file'''
        try:
            f = open(filename, mode='r')
        except:
            print("Failed to open file '%s'" % filename)
            return False
        count = 0
        changed = 0
        for line in f:
            line = line.strip()
            if not line or line[0] == "#":
                continue
            line = line.replace(',',' ')
            a = line.split()
            if len(a) != 2:
                print("Invalid line: %s" % line)
                continue
            # some parameters should not be loaded from files
            if a[0] in self.exclude_load:
                continue
            if not fnmatch.fnmatch(a[0].upper(), wildcard.upper()):
                continue
            if mav is not None:
                if a[0] not in self.keys():
                    print("Unknown parameter %s" % a[0])
                    continue
                old_value = self.__getitem__(a[0])
                if math.fabs(old_value - float(a[1])) > self.mindelta:
                    if self.mavset(mav, a[0], a[1]):
                        print("changed %s from %f to %f" % (a[0], old_value, float(a[1])))
                    changed += 1
            else:
                self.__setitem__(a[0], float(a[1]))
            count += 1
        f.close()
        if mav is not None:
            print("Loaded %u parameters from %s (changed %u)" % (count, filename, changed))
        else:
            print("Loaded %u parameters from %s" % (count, filename))
        return True

    def show(self, wildcard='*'):
        '''show parameters'''
        k = sorted(self.keys())
        for p in k:
            if fnmatch.fnmatch(str(p).upper(), wildcard.upper()):
                print("%-16.16s %f" % (str(p), self.get(p)))

    def diff(self, filename, wildcard='*'):
        '''show differences with another parameter file'''
        other = MAVParmDict()
        if not other.load(filename):
            return
        keys = sorted(list(set(self.keys()).union(set(other.keys()))))
        for k in keys:
            if not fnmatch.fnmatch(str(k).upper(), wildcard.upper()):
                continue
            if not k in other:
                print("%-16.16s              %12.4f" % (k, self[k]))
            elif not k in self:
                print("%-16.16s %12.4f" % (k, other[k]))
            elif abs(self[k] - other[k]) > self.mindelta:
                print("%-16.16s %12.4f %12.4f" % (k, other[k], self[k]))
                
        */

module.exports = MavParams;