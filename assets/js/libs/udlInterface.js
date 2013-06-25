/*
Interface for high-level commands that define UAV actions.
Implementations are in the udlImplementations/ directory.
*/

function udlInterface() {};

udlInterface.prototype.setProtocol = function(protocol) {
	this.protocol = protocol;
};

udlInterface.prototype.takeoff = function() {};
udlInterface.prototype.land = function() {};
udlInterface.prototype.arm = function() {};
udlInterface.prototype.disarm = function() {};
udlInterface.prototype.setAutoMode = function() {};

module.exports = udlInterface;