define(['backbone', 'Templates'], function(Backbone, template) {
  
  var GpsWidget = Backbone.View.extend({
    
    el: '#gpsWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/gpsWidget.jade']());
    
    }
    
  });
  return GpsWidget;

});