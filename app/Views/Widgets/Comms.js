define(['backbone', 'Templates'], function(Backbone, template) {
  
  var CommsWidget = Backbone.View.extend({
    
    el: '#commsWidget',
    className: 'widget',
    
    initialize: function() {
      _.bindAll(this);
      this.model.on('change:status', this.render);
      this.model.on('change:time_since_last_heartbeat', this.render);
    },

    render: function() {
      var hasRendered;

      // Only draw this on initial page render.
      if(true !== hasRendered) {

        var heartbeatMessage = '';
        if( this.model.get('time_since_last_heartbeat') > 5000 ) {
          heartbeatMessage = ', disconnected for ' + this.model.get('time_since_last_heartbeat') + ' s';
        } 

        this.$el.html(template['commsWidget'](
          {
              time_since_last_heartbeat: heartbeatMessage,
              drop_rate_comm: this.model.get('drop_rate_comm'),
              errors_comm: this.model.get('errors_comm')
          }
        ));

        $('#connected').hide();
        $('#connecting').hide();

        hasRendered = true;
      }

      // Rerender upon events.
      switch(this.model.get('status')) {
        case 'disconnected':
          $('#comms .connected').hide();
          $('#comms .connecting').hide();
          $('#comms .disconnected').show();
          break;

        case 'connecting':
          $('#comms .connected').hide();
          $('#comms .connecting').show();
          $('#comms .disconnected').hide();
          break;

        case 'connected':
          $('#comms .connected').show();
          $('#comms .connecting').hide();
          $('#comms .disconnected').hide();
        break;
      }

    }
    
  });

  return CommsWidget;

});