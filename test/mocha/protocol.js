/*

Trivial interface thing, not entirely sure about how its surface area
should interact with other portions.  The protocol really exposes
messages all the way to the client, but keeps internals about the
maintenance of those.

*/
describe("Protocol interface", function() {
  
  beforeEach(function() {

    this.protocol = new gcsProtocol();

  });

  it("Has an encode function", function() {
    this.protocol.encode.is.a.function;
  });

  it("Has an decode function", function() {
    this.protocol.decode.is.a.function;
  });

});