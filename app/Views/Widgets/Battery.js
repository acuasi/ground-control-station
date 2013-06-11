define(['backbone', 'Templates'], function(Backbone, template) {
  
  var BatteryWidget = Backbone.View.extend({
    
    el: '#batteryWidget',
    className: 'widget',
    
    initialize: function() {

      _.bindAll(this);
      this.model.on('change:current_battery', this.render);
      this.model.on('change:voltage_battery', this.render);
      this.model.on('change:battery_remaining', this.render);

    },

    render: function() {
      
      this.$el.html(template['batteryWidget'](
        {
          battery_remaining: this.model.get('battery_remaining'),
          voltage_battery: this.model.get('voltage_battery') / 1000,
          current_battery: this.model.get('current_battery') / -100
        }
      ));
    
    }
    
  });
  return BatteryWidget;

});