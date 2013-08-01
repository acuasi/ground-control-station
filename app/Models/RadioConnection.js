// Model to store information about the radio connection with the drone
define(['backbone'], function(Backbone) {

  var RadioConnection = Backbone.Model.extend({

    defaults: {
      connected: false,
      strength: undefined
    }

  });

  return RadioConnection;
  
});
