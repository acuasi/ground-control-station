/*
Tests against interface, implementations of a UDL, UAV Domain Language
*/
var udl = require("../../assets/js/libs/udlInterface.js"),
	quadUdl = require("../../assets/js/libs/udlImplementations/quadcopter.js");

/*
These are just existence tests.
*/
describe('UDL interface prototype', function() {

	beforeEach(function() {
		this.udl = new udl();
	});

	it('can be provisioned with a protocol implementation', function() {
		this.udl.setProtocol('protocol');
		this.udl.protocol.should.equal('protocol');
	});

	it('has a takeoff function', function() {
		this.udl.takeoff.should.be.a.function;
	} );
	
	it('has a land function', function() {
		this.udl.land.should.be.a.function;
	} );

	it('has a arm function', function() {
		this.udl.arm.should.be.a.function;
	} );

	it('has a disarm function', function() {
		this.udl.disarm.should.be.a.function;
	} );

	it('has an "enter autonomous mode" function', function() {
		this.udl.setAutoMode.should.be.a.function;
	});

	it('has a "fly to coordinates" function', function() {
		this.udl.flyToPoint.should.be.a.function;
	});

	it('has a "loiter" function', function() {
		this.udl.loiter.should.be.a.function;
	});
});

describe('Quadcopter UDL implementation', function() {
	beforeEach(function() {
		this.quad = new quadUdl();		
	});

	it('commands the sequence to arm the quadcopter', function() {
		this.quad.should.exist;
	});

	describe('fly to coordinates function', function() {

		it('clears the current mission', function() {

		});

		it('creates a mission of a single waypoint', function() {

		});

		it('commands "start mission" to go to the new single waypoint', function() {

		});

	});
})