/*
Vaguely-silly test, point being that Node's built-in Buffer class
and derived subclasses should work fine for what we need.

Writing the tests made me realize that.
*/
describe("Buffer interface", function() {
  
  beforeEach(function() {
    this.buffer = new Buffer();
  });

  it('can be written to', function() {
    this.buffer.write.should.be.a.function;
  });

  it('can be read from', function() {
    this.buffer.read.should.be.a.function;
  });

  it('has a "data" event that feeds new data to a callback', function(done) {

    this.buffer.on('data', function(data) {
      data.should.equal('data');
      done();
    });

    // Too fake to be a valid test?
    this.buffer.data('data');

  });

  it('has a "error" event that feeds errors to a callback', function(done) {
    this.buffer.on('error', function(error) {
      error.should.equal('error');
      done();
    });

    // Too fake to be a valid test?
    this.buffer.error('error');

  });

  it('has a "disconnected" event that triggers a callback', function(done) {
    this.buffer.on('disconnected', function() {
      this.should.exist;
      done();
    })
    this.buffer.disconnect();
  });

});