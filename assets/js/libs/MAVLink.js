var EventEmitter = require('events').EventEmitter,
  util = require('util'),
  Backbone = require('backbone');

var MAVLink = {};
util.inherits(MAVLink, EventEmitter);

module.exports = Backbone.Model.extend(MAVLink);