define(['backbone', 'Templates'], function(Backbone, template) {
  
  var CommsWidget = Backbone.View.extend({
    
    el: '#commsWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/commsWidget.jade']());
    
    }
    
  });
  return CommsWidget;

});