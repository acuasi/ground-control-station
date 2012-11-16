var mavlink = require("../../lib/mavlink_ardupilotmega_v1.0.js");

/*

Trivial interface thing, not entirely sure about how its surface area
should interact with other portions.  The protocol really exposes
messages all the way to the client, but keeps internals about the
maintenance of those.

Instead of implementing the intermediary interface (no real need yet)
this will just test the implicit interface of the concrete Mavlink implementation.

*/
describe("Protocol interface", function() {
  
  beforeEach(function() {

    this.protocol = new mavlink();

  });

  it("Has an decode function", function() {
    this.protocol.decode.should.be.a('function');
  });

});