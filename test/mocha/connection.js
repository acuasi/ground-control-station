var net = require('net'),
    mavlink = require("mavlink_ardupilotmega_v1.0"),
    sinon = require("sinon"),
    nconf = require("nconf"),
    UavConnection = require("../../assets/js/libs/uavConnection.js"),
    should = require('should'),
    fs = require("fs"),
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

describe('UAV Connection', function() {

    // Set up a temporary TCP server for use with the UavConnection.
    beforeEach(function() {
        this.mavlinkParser = new mavlink(logger);
        this.c = new UavConnection.UavConnection(nconf, this.mavlinkParser, logger);

        this.server = net.createServer(function(c) {
            c.pipe(c); // echo data between clients
        });

        this.heartbeatMessage = new Buffer([0xfe, 0x09, 0x03, 0xff, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x06, 0x08, 0x00, 0x00, 0x03, 0x9f, 0x5c])

        this.server.listen(nconf.get('tcp:port'));
    });

    afterEach(function() {
        this.server.close();
    });

    it('can write messages to its connection', function(done) {
        var heartbeat = this.heartbeatMessage;
        this.server.on('connection', function(connection) {
            connection.on('data', function(data) {
                data.toString().should.equal(heartbeat.toString());
                done();
            })
        })
        var c = this.c; // assign to juggle scope below
        // Only try to write once the connection is actually present, i.e. in the 'connecting' state
        this.c.on('connecting', function() {
            c.write(heartbeat);
        });
        this.c.start(); // attempt to connect
    });

    describe('start function', function() {
        it('starts the connection heartbeat, once per second', function() {
            var clock = sinon.useFakeTimers();
            var spy = sinon.spy(this.c, 'heartbeat');
            this.c.start();
            spy.called.should.be.false;
            clock.tick(1000);
            spy.calledOnce.should.be.true;
        });
        it('calls the "disconnected" state immediately', function() {
            var spy = sinon.spy(this.c, 'disconnected');
            this.c.start();
            spy.called.should.be.true;
        });
    });

    describe('connection heartbeat monitor', function() {
        it("emits a 'heartbeat' event", function(done) {
            this.c.on('heartbeat', function() {
                should.ok;
                done();
            });
            this.c.heartbeat();
        });

        it("updates the time since the last received packet heartbeat", function(done) {
            var clock = sinon.useFakeTimers();

            var heartbeat = this.heartbeatMessage;
            var c = this.c;
            // Send a heartbeat packet once the connection is listening
            this.server.on('connection', function(connection) {

                connection.write(heartbeat);
                clock.tick(5000);

            });

            this.c.on('heartbeat', function() {
                c.timeSinceLastHeartbeat.should.equal(2000);
                done();
            });
            this.c.start();

        });
        it("invokes the current stage of the state machine", function() {
            var spy = sinon.spy(this.c, 'disconnected');
            spy.called.should.be.false;
            this.c.heartbeat();
            spy.called.should.be.true;
        });
    });

    describe('packet heartbeat monitor', function() {
        it('emits a heartbeat:packet event when it receives a heartbeat from the protocol handler', function(done) {

            var heartbeat = this.heartbeatMessage;
            // Send a heartbeat packet once the connection is listening
            this.server.on('connection', function(connection) {
                connection.write(heartbeat);
            });
            var c = this.c;
            c.on('heartbeat:packet', function() {
                //c.lastHeartbeat.should.equal(4);             
                console.log(c.lastHeartbeat);
                should.ok;
                done();
            });
            c.start();

        });
    });

    describe('state machine', function() {

        describe('"disconnected" state', function() {

            it('triggers a "disconnected" event when entered', function(done) {
                this.c.on('disconnected', function() {
                    should.ok;
                    done();
                });
                this.c.start();
            });

            it('is the starting point for the state machine', function() {
                this.c.getState().should.equal('disconnected');
            });

            it('transitions to "connecting" state after protocol (tcp, udp, serial) link is opened', function(done) {
                this.c.on('connecting', function() {
                    should.ok;
                    done();
                });
                this.c.start();
            });

        });

        describe('"connecting" state', function() {
            it('triggers a "connecting" event on itself when the connecting state is reached', function(done) {
                this.c.on('connecting', function() {
                    should.ok;
                    done();
                });
                this.c.start();
            });
            it('emits a connecting:attached event when the protocol is attached to the data stream', function(done) {
                this.c.on('connecting:attached', function() {
                    should.ok;
                    done();
                });
                this.c.start();
            });

            it("attaches the packet heartbeat monitor to the protocol connection", function(done) {
                var c = this.c;
                var spy = sinon.spy(c, 'updateHeartbeat');
                spy.called.should.equal.false;
                this.c.on('connecting:attached', function() {
                    // Invoke the first listener on the protocol's heartbeat; this should be the
                    // attached binding done by the 'connecting' state.  Check if it ran.
                    c.protocol.listeners('HEARTBEAT')[0]();
                    spy.called.should.equal(true);
                    done();
                })
                this.c.start();
            });

            it('transitions to "connected" state after receiving a heartbeat packet', function(done) {

                var heartbeat = this.heartbeatMessage;

                // Send a heartbeat packet once the connection is listening
                this.server.on('connection', function(connection) {
                    connection.write(heartbeat);
                });

                this.c.on('connected', function() {
                    should.ok;
                    done();
                });

                this.c.start();

            });
            xit('falls back to "disconnected" state if the protocol connection is lost', function() {});

        });

        describe('"connected" state', function() {
            xit('triggers a "connected" event on itself when the connected state is reached', function(done) {
                this.c.on('connected', function() {
                    should.ok;
                    done();
                });
                this.c.start();
            });

            xit('falls back to "connecting" state if protocol heartbeat is lost for a configurable # of seconds', function() {});

            it('falls back to "disconnected" state if the protocol connection is lost', function() {});

        });

    });

    describe('status information', function() {
        xit('exposes stats that the MAVLink protocol object maintains (bytes sent, errors, etc)', function() {});
    });

});

/** swamp for copy/paste


/***
We use `socat` to establish  a bidirectional serial connection for executing tests.

on osx: brew install socat

// mkdir $HOME/dev/
// OSX: socat -d -d PTY,link=$HOME/dev/master,raw,ispeed=115200,ospeed=115200,echo=0 PTY,link=$HOME/dev/slave,raw,ispeed=115200,ospeed=115200,echo=0 &
// CentOS: socat -d -d PTY,link=$HOME/dev/master,raw,b115200,ispeed=115200,ospeed=115200,echo=0 PTY,link=$HOME/dev/slave,raw,b115200,ispeed=115200,ospeed=115200,echo=0 &

var SerialPort = require("serialport").SerialPort,
  mavlink = require("../../assets/js/libs/mavlink_ardupilotmega_v1.0.js"),
  sinon = require("sinon"),
  nconf = require("nconf"),
  fs = require("fs");

nconf.argv().env().file({ file: 'config.json' });

// mkdir $HOME/dev/
// OSX: socat -d -d PTY,link=$HOME/dev/master,raw,ispeed=115200,ospeed=115200,echo=0 PTY,link=$HOME/dev/slave,raw,ispeed=115200,ospeed=115200,echo=0 &
// CentOS: socat -d -d PTY,link=$HOME/dev/master,raw,b115200,ispeed=115200,ospeed=115200,echo=0 PTY,link=$HOME/dev/slave,raw,b115200,ispeed=115200,ospeed=115200,echo=0 &
// [previous] centos: socat -d -d pty,raw,echo=0 pty,raw,echo=0 &
global.masterSerial = new SerialPort(nconf.get('testing:serial:master'), {
  baudrate: 115200
});
global.slaveSerial = new SerialPort(nconf.get('testing:serial:slave'), {
  baudrate: 115200
});

// Actual data stream taken from the serial port, should work for integration testing.
global.fixtures = global.fixtures || {};
global.fixtures.serialStream = fs.readFileSync("test/binary-capture-57600");

describe("Connection manager", function() {

  before(function() {

    this.serial = global.slaveSerial;
    this.connection = new Connection();
    this.connection.setBuffer(global.masterSerial);
    this.connection.setProtocol(new MAVLink());

    this.heartbeat = new mavlink.messages.heartbeat(
      mavlink.MAV_TYPE_GENERIC,
      mavlink.MAV_AUTOPILOT_ARDUPILOTMEGA,
      mavlink.MAV_MODE_FLAG_SAFETY_ARMED,
      0, // custom bitfield
      mavlink.MAV_STATE_STANDBY
      // The sixth field is apparently implicit, for the heartbeat (mavlink version)
    );

  });

  after(function() {
    global.masterSerial.removeAllListeners('data');
  });

  // Once corrected, this is a kind of integration test: it involves a buffer,
  // a protocol and comms over the wire.
  it("can send a heartbeat back and forth", function(done) {

    // Register the event handler
    this.connection.on('data', function(data) {

      var m = new mavlink();
      var unpacked = m.decode(data.toByteArray());
console.log(data);
      unpacked.type.should.equal(mavlink.MAV_TYPE_GENERIC);
      unpacked.autopilot.should.equal(mavlink.MAV_AUTOPILOT_ARDUPILOTMEGA);
      unpacked.base_mode.should.equal(mavlink.MAV_MODE_FLAG_SAFETY_ARMED);
      unpacked.custom_mode.should.equal(0);
      unpacked.system_status.should.equal(mavlink.MAV_STATE_STANDBY);
      
      done(); // tell Mocha to wait until this happens to complete the test (async)

    });    
console.log(this.heartbeat.pack());
    // Write the packet
    this.serial.write(new Buffer(this.heartbeat.pack()));
    
  });

  // Point being the client can provision the connection, so various
  // buffer/protocol combinations are possible.
  it("has an IO buffer", function() {
    this.connection.buffer.should.be.a('object');
  });

  it("has a protocol en/decoder", function() {
    this.connection.protocol.should.be.a('object');
  });

  // This is happening here (multiple calls to done()...)
  // https://github.com/visionmedia/mocha/issues/316#commit-ref-3b17e85
  it("watches the data event on the buffer and attempts to decode data whenever possible", function(done) {
    var spy = sinon.spy(this.connection, 'attemptDecode');
    this.serial.on('data', function() {
      spy.called.should.equal.true;
      done();
    })
    this.serial.write('message data');
  });

  it("maintains an accumulator of unparsed/undecoded data", function(done) {

    // bind an event so we don't have async woe
    this.connection.on('data', function() {
      this.connection.accumulator.should.equal('message data');
      done();
    });

    this.serial.write('message data');

  });

  it("can flush its accumulator", function() {
    this.connection.accumulator = 'nonempty';
    this.connection.flush();
    this.connection.should.have.property('accumulator', null);
  });

  // Existence test only, later will test for capture of data
  it("sends data on demand", function() {
    var spy = sinon.spy(this.connection, 'send');
    this.connection.send('test data');
    spy.called.should.equal(true);
  });

  // The events that this emits are higher-level than the serial port events,
  // more like messages than data.
  it("emits events to subscribers", function() {

    var spy = sinon.spy();
    this.connection.on("message", spy);
    this.serial.write('valid message TBD in fixtures');

    sinon.assert.calledOnce(spy);
    sinon.assert.calledWith(spy, 'valid mavlink object TBD in fixtures');

  });

  // The intent of this test is to ensure that a known number of MAVLink packets
  // get decoded from an actual recorded stream of data.
  it("correctly parses a stream of binary data from the serial port", function(done) {
    this.connection.on("message", function() {
      console.log("got a message in test");
    });

    this.serial.write(global.fixtures.serialStream);
  });
});

*/
