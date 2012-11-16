var EventEmitter = require('events').EventEmitter,
  util = require('util'),
  Backbone = require('backbone');

var Connection = {};
util.inherits(Connection, EventEmitter);

module.exports = Backbone.Model.extend({

  // Use own properties instead of attributes for these items.
  setBuffer: function(buffer) {
    this.buffer = buffer;
  },

  setProtocol: function(protocol) {
    this.protocol = protocol;
  },

  flush: function() {
    this.accumulator = null;
  },

  send: function(message) {

  },

  attemptDecode: function() {

  }

});