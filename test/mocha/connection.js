var SerialPort = require("serialport").SerialPort,
  mavlink = require("../../lib/mavlink_ardupilotmega_v1.0.js"),
  sinon = require("sinon"),
  nconf = require("nconf"),
  fs = require("fs");

nconf.argv().env().file({ file: 'config.json' });

// mkdir $HOME/dev/
// OSX: socat -d -d PTY,link=$HOME/dev/master,raw,ispeed=115200,ospeed=115200,echo=0 PTY,link=$HOME/dev/slave,raw,ispeed=115200,ospeed=115200,echo=0 &
// CentOS: socat -d -d PTY,link=$HOME/dev/master,raw,b115200,ispeed=115200,ospeed=115200,echo=0 PTY,link=$HOME/dev/slave,raw,b115200,ispeed=115200,ospeed=115200,echo=0 &
// [previous] centos: socat -d -d pty,raw,echo=0 pty,raw,echo=0 &
global.masterSerial = new SerialPort(nconf.get('serial:master'), {
  baudrate: 115200
});
global.slaveSerial = new SerialPort(nconf.get('serial:slave'), {
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
