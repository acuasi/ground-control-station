var SerialPort = require("serialport").SerialPort
  , Connection = require("../../lib/Connection.js")
  //, MAVLink = require("../../lib/MAVLink")
  , mavlink = require("../../lib/mavlink_ardupilotmega_v1.0.js")
  , sinon = require("sinon")
  , nconf = require("nconf");

nconf.argv()
       .env()
       .file({ file: '../../config.json' });

describe("Connection manager", function() {

  before(function() {

    this.connection = new Connection;

    // Wrap with try/catch to prevent the master/slave failure from preventing any test results
    

    // centos: socat -d -d pty,raw,echo=0 pty,raw,echo=0 &
    this.master = new SerialPort("/dev/ttys005");
    this.slave = new SerialPort("/dev/ttys006");

    

    this.connection.setBuffer(this.slave);
    this.connection.setProtocol(new mavlink);

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

  });

  it("can send a heartbeat back and forth", function(){
    this.slave.on('data', function(data){
      console.log(data);

    });
    this.master.write(new Buffer("hello"));

  });
  // Point being the client can provision the connection, so various
  // buffer/protocol combinations are possible.
  /*it("has an IO buffer", function() {
    this.connection.should.have.a.property('buffer');
    this.connection.buffer.should.be.a('object');
  });

  it("has a protocol en/decoder", function() {
    this.connection.should.have.a.property('protocol');
    this.connection.protocol.should.be.a('object');
  });

  it("watches the data event on the buffer and decodes data whenever possible", function() {
    var spy = sinon.spy(this.connection, 'decode');
    this.serial.write('message data');
    spy.called.should.equal.true;
  });

  // Existence test only, later will test for capture of data
  it("sends data on demand, encoding it", function() {
    var spy = sinon.spy(this.connection, 'encode');
    this.connection.send('test data');
    spy.called.should.equal.true;
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
*/

});
