var sinon = require("sinon"),
    mavlink = require("mavlink_ardupilotmega_v1.0"),
    MavParam = require("../../assets/js/libs/mavParam.js"),
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


describe('MAVLink parameter manager', function() {

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

        this.mavParam = new MavParam(this.mavlinkParser, mavlink, logger);
    });

    afterEach(function() {
        this.server.close();
    });

    describe('sets params on the UAV', function() {

        it('sends a param_set message', function(done) {
            this.localConnection.on('data', function(data) {
                message = mavlink.decode(data);
                console.log(message);
            });
            this.mavParam.set('MAG_ENABLE', 1.0);
        });

        it('waits for the specified timeout interval for the corresponding ack (param_value echoed back at it)', function() {

        });

    });

    it('can read a specific parameter', function() {

    });

    it('can read all parameters', function() {

    });


});
