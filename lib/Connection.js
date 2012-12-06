var EventEmitter = require('events').EventEmitter,
  util = require('util'),
  Backbone = require('backbone'),
  _ = require('underscore'),
  w = require('winston'); // logging

var Connection = Backbone.Model.extend({

  initialize: function() {
  },

  // Use own properties instead of attributes for these items.
  setBuffer: function(buffer) {
    this.buffer = buffer;
    this.attachEventBindings();
  },

  attachEventBindings: function() {

    this.buffer.on('data', _.bind(function(data) {
      try {
        w.info("Data event on Connection buffer caught, parsing....");
        this.attemptDecode(data);
        w.info("Bubbling event up to self (Connection)...");
        this.trigger('data', data); // bubble the event
      } catch (e) {
        w.error('Caught error when handling data event in Connection: ' + e);
      }
    }, this));

  },

  // Add whatever is incoming in the data stream to the buffer.
  accumulate: function(data) {

    // This probably isn't the right way to do this, because it's copying a lot of data.
    this.buf = Buffer.concat([this.buf, data]);

  },

  setProtocol: function(protocol) {
    this.protocol = protocol;
  },

  flush: function() {
    this.buf = null;
  },

  send: function(message) {

  },

  // Try and decode what is currently in the buffer.
  attemptDecode: function(data) {
    var messages = this.protocol.parseBuffer(data);
    if( messages ) {
      this.trigger('packet', packet);
    }
  }

});

module.exports = Connection;