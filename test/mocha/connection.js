var SerialPort = require("serialport").SerialPort
  , Connection = require("../../lib/Connection.js")
  , MAVLink = require("../../lib/MAVLink")
  , sinon = require("sinon");

describe("Connection manager", function() {

  before(function() {

    this.connection = new Connection;

    // Use this: http://code.google.com/p/macosxvirtualserialport/
    // or similar.  Set up a serial port connection,   
    this.serial = new SerialPort("/dev/master", {
      baudrate: 9600
    });
    var slave = new SerialPort("/dev/slave", {
      baudrate: 9600
    });

    this.connection.setBuffer(slave);
    this.connection.setProtocol(new MAVLink);

  });

  after(function() {

  });

  // Point being the client can provision the connection, so various
  // buffer/protocol combinations are possible.
  it("has an IO buffer", function() {
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

});
