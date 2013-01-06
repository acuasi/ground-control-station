define(['backbone', 'Templates'], function(Backbone, template) {
  
  var BatteryWidget = Backbone.View.extend({
    
    el: '#batteryWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/batteryWidget.jade']());
    
    }
    
  });
  return BatteryWidget;

});