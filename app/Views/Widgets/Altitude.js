define(['backbone', 'Templates'], function(Backbone, template) {
  
  var AltitudeWidget = Backbone.View.extend({
    
    el: '#altitudeWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/altitudeWidget.jade']());
    
    }
    
  });
  return AltitudeWidget;

});