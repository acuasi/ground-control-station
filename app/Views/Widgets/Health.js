define(['backbone', 'Templates'], function(Backbone, template) {
  
  var HealthWidget = Backbone.View.extend({
    
    el: '#healthWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/healthWidget.jade']());
    
    }
    
  });
  return HealthWidget;

});