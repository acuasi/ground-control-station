var sinon = require("sinon"),
    mavlink = require("mavlink_ardupilotmega_v1.0"),
    MavMission = require("../../assets/js/libs/mavMission.js"),
    should = require('should'),
    net = require('net'),
    nconf = require("nconf"),
    UavConnection = require("../../assets/js/libs/uavConnection.js"),
    winston = require("winston");

// Logger
var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.File)({
            filename: 'mavlink.dev.log'
        })
    ]
});

nconf.argv().env().file({
    file: 'test/connection.test.config.json'
});

// Some static data for testing: mission plan
var missionItemsTesting = [
    [0, 1, 3, 0, 0.000000, 0.000000, 0.000000, 0.000000, -35.362881, 149.165222, 582.000000, 1],
    [1, 0, 3, 16, 0.000000, 0.000000, 0.000000, 0.000000, -35.362324, 149.164291, 120.000000, 1],
    [2, 0, 3, 16, 0.000000, 0.000000, 0.000000, 0.000000, -35.363670, 149.164505, 120.000000, 1],
    [3, 0, 3, 16, 0.000000, 0.000000, 0.000000, 0.000000, -35.362358, 149.163651, 120.000000, 1],
    [4, 0, 3, 16, 0.000000, 0.000000, 0.000000, 0.000000, -35.363777, 149.163895, 120.000000, 1],
    [5, 0, 3, 16, 0.000000, 0.000000, 0.000000, 0.000000, -35.362411, 149.163071, 120.000000, 1],
    [6, 0, 3, 16, 0.000000, 0.000000, 0.000000, 0.000000, -35.363865, 149.163223, 120.000000, 1],
    [7, 0, 3, 16, 0.000000, 0.000000, 0.000000, 0.000000, -35.362431, 149.162384, 120.000000, 1],
    [8, 0, 3, 16, 0.000000, 0.000000, 0.000000, 0.000000, -35.363968, 149.162567, 120.000000, 1],
    [9, 0, 3, 20, 0.000000, 0.000000, 0.000000, 0.000000, -35.363228, 149.161896, 30.000000, 1]
];

describe('MAVLink mission item management', function() {

    // Doozy of a setup function, but here's what it's doing:
    // -- set up a TCP server to act in place of the APM
    // -- Initialize the MAVLink parser 
    // -- Initialize a "real" UavConnection so we can read/write from the TCP stream
    beforeEach(function(done) {

        // Prepare a fake TCP server for sending/receiving packets
        this.mavlinkParser = new mavlink(logger);
        this.c = new UavConnection.UavConnection(nconf, this.mavlinkParser, logger);
        this.mavlinkParser.setConnection(this.c);

        this.server = net.createServer(function(c) {
            c.pipe(c); // echo data between clients
        });

        this.server.listen(nconf.get('tcp:port'));

        // Construct the mission manager
        this.mission = new MavMission(mavlink, this.mavlinkParser, this.c, logger);

        // Initialize the connection, then continue with the test once the connection is open
        // Send a heartbeat packet once the connection is listening
        var heartbeat = new Buffer([0xfe, 0x09, 0x03, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x06, 0x08, 0x00, 0x00, 0x03, 0x9f, 0x5c])

        // Juggle scope a bit to get a local connection variable available to downstream tests
        var self = this;
        this.localConnection = undefined; // will be defined when the connection is opened below
        this.server.on('connection', function(connection) {
            connection.write(heartbeat);
            self.localConnection = connection;
        });

        var d = done;
        this.c.on('connected', function() {
            done();
        });
        this.c.start();

        // Prep some mission item mavlink messages for testing as required
        this.missionItems = [];

        // Build a valid MissionItem message; the funny syntax below (assign to array, then shuffle output) is just
        // so I can directly reuse code from MavProxy.
        _.each(missionItemsTesting, function(e, i, l) {
            // target_system, target_component, seq, frame, command, current, autocontinue, param1, param2, param3, param4, x, y, z
            var mi = new mavlink.messages.mission_item(
                this.mavlinkParser.srcSystem,
                this.mavlinkParser.srcComponent,
                e[0], // seq
            e[2], // frame
            e[3], // command
            e[1], // current
            e[11], // autocontinue
            e[4], // param1,
            e[5], // param2,
            e[6], // param3
            e[7], // param4
            e[8], // x (latitude
            e[9], // y (longitude
            e[10] // z (altitude
            );
            this.missionItems.push(mi);
        }, this);

    });

    afterEach(function() {
        this.server.close();
    });

    describe('sendToPlatform()', function() {
        it('sends a MISSION_COUNT message first', function(done) {
            var mission = this.mission;
            this.localConnection.on('data', function(data) {
                var missionCount = new Buffer([0xfe, 0x04, 0x00, 0x01, 0x01, 0x2c, 0x02, 0x00, 0x01, 0x01, 0x01, 0xde]);
                data.should.equal.missionCount;
                done();
            });
            this.mission.addMissionItem(this.missionItems[0]);
            mission.sendToPlatform();
        });

        // This code was written on a plane while the child next to me coughed continuously,
        // the woman in front of me was having a medical-emergency level of vomiting and was being 
        // given an in-flight injection by a doctor who happened to be on board,
        // and the woman in front of that started to pick a fight with the flight attendants who "kept bumping her seat."
        // Continuous turblence on the flight is a given!  And the man whose child is sick next to me kept moaning
        // and nearly vomiting  during takeoff.
        //
        // This after 3 days of hellish sickness in Vegas, wherin I had a fever sufficient to cause me to stumble/fall down
        // disoriented in my hotel room and miss any kind of rowdiness to which I may have wished to get up.
        //
        // I have shoved the in-flight snack of peanuts up my nose to redirect my unhappiness and block the abundant aromas.
        //
        // At least progress on the code is good.  =P
        // Happiness is an unmanned aircraft.
        it('awaits a MISSION_REQUEST message, and responds with a MISSION_ITEM message matching the MISSION_REQUEST sent', function(done) {
            var self = this;
            this.localConnection.on('data', function(data) {
                // Decode the packet and decide how to respond.
                var message = self.mavlinkParser.decode(data);
                if (message.name === 'MISSION_COUNT') {
                    // Send the mission request; seq number here means, send mission item #4
                    var missionRequest = new mavlink.messages.mission_request(1, 1, 4);
                    var buf = new Buffer(missionRequest.pack(0, 1, 1));
                    self.localConnection.write(buf);
                } else {
                    // Assume we got sent a MISSION_ITEM, check it out.
                    message = self.mavlinkParser.decode(data);
                    message.seq.should.equal(4);
                    done();
                }
            });
            // Load full mission items list
            _.each(this.missionItems, function(e, i, l) {
                this.mission.addMissionItem(e);
            }, this);
            this.mission.sendToPlatform();
        });
        it('awaits a final MISSION_ACK message with type=0, confirming the mission is loaded successfully, triggering a "mission:loaded" event on itself', function(done) {

            var self = this;
            this.localConnection.on('data', function(data) {
                // Decode the packet and decide how to respond.
                var message = self.mavlinkParser.decode(data);
                if (message.name === 'MISSION_COUNT') {
                    // Send the mission request; seq number here means, send mission item #4
                    var missionRequest = new mavlink.messages.mission_request(1, 1, 0);
                    var buf = new Buffer(missionRequest.pack(0, 1, 1));
                    self.localConnection.write(buf);
                } else {
                    // Assume we got sent a MISSION_ITEM, send the corresponding ACK to say OK.
                    var missionAck = new mavlink.messages.mission_ack(1, 1, 0); // 0 = mission loaded OK
                    var buf = new Buffer(missionAck.pack(0, 1, 1));
                    self.localConnection.write(buf);
                }
            });

            this.mission.addMissionItem(this.missionItems[0]);
            this.mission.on('mission:loaded', function() {
                done();
            });

            this.mission.sendToPlatform();
        });
    });

    it('can add a MISSION_ITEM message to a stack', function() {
        this.mission.getMissionItems().should.be.empty;
        this.mission.addMissionItem(this.missionItems[0]);
        this.mission.getMissionItems().should.have.length(1);
    });

    it('keeps its array of MISSION_ITEMS in sorted order by seq#', function() {
        // Load full mission items list
        _.each(this.missionItems, function(e, i, l) {
            this.mission.addMissionItem(e);
        }, this);
        this.mission.getMissionItems()[4].seq.should.equal(4);
    });

    describe('clears all mission items', function() {
        beforeEach(function() {
            // Load full mission items list
            _.each(this.missionItems, function(e, i, l) {
                this.mission.addMissionItem(e);
            }, this);
        });
        it('by clearing its local list of mission items', function() {
            this.mission.getMissionItems().length.should.equal(10);
            this.mission.clearMission();
            this.mission.getMissionItems().length.should.equal(0);
        });
        it('by sending a MISSION_CLEAR message to the platform', function(done) {
            var self = this;
            this.localConnection.on('data', function(data) {
                // Decode the packet and decide how to respond.
                var message = self.mavlinkParser.decode(data);
                if (message.name === 'MISSION_CLEAR_ALL') {
                    done();
                }
            });
            this.mission.clearMission();
        });
    });

    it.skip('should be able to read a mission from the APM', function() {
        // TBD
    });

});
