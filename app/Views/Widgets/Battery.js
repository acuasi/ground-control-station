define(['backbone', 'Templates'], function(Backbone, template) {
  
  var BatteryWidget = Backbone.View.extend({
    
    el: '#batteryWidget',
    className: 'widget',
    
    initialize: function() {

      _.bindAll(this);
      this.model.on('change:battery_remaining', this.render);

    },

    render: function() {

      this.$el.html(template['batteryWidget'](
        {
          battery_remaining: this.model.get('battery_remaining')
        }
      ));
    
    }
    
  });
  return BatteryWidget;

});