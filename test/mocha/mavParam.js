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
        debugger;

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

        // _.once is so that the heartbeat doesn't cause the done() to be called multiple times for long-lasting tests
        this.c.on('connected', _.once(function() {
            done();
        }));
        this.c.start();

        this.mavParam = new MavParam(this.mavlinkParser, logger);
    });

    afterEach(function() {
        this.server.close();
    });

    describe('sets params on the UAV', function() {

        it.skip('sends a param_set message', function(done) {
            this.timeout(3000); // change timeout for this test
            var self = this;
            this.localConnection.on('data', _.once(function(data) {
                var message = self.mavlinkParser.decode(data);
                message.name.should.equal('PARAM_SET'); // PARAM_SET message ID
                message.param_value.should.equal(1);
                message.param_id.should.equal('MAG_ENABLE');
                done();
            }));
            this.mavParam.set('MAG_ENABLE', 1.0);
        });

        it.skip('waits for the specified timeout interval for the corresponding ack (param_value echoed back at it)', function() {

        });

    });

    describe('reading params from the UAV', function() {
        it('can read a single param from the platfom', function(done) {
            var self = this;
            this.localConnection.on('data', _.once(function(data) {
                var message = self.mavlinkParser.decode(data);
                message.name.should.equal('PARAM_REQUEST_READ'); // PARAM_SET message ID
                message.param_id.should.equal('MAG_ENABLE');
                done();
            }));
            this.mavParam.get('MAG_ENABLE');

        } );

        describe('reading all params from the UAV', function() {
            it('commands the UAV to start sending all params', function(done) {

                var self = this;
                this.localConnection.on('data', _.once(function(data) {
                    var message = self.mavlinkParser.decode(data);
                    message.name.should.equal('PARAM_REQUEST_LIST'); // PARAM_SET message ID
                    done();
                }));
                this.mavParam.getAll();
            });
            it('listens for the total amount of parameters to expect from the platform', function() {

            });
            it('receives all parameters until the total expected # is read, then emits a params:loaded event', function() {

            });
        } );
    });


});
