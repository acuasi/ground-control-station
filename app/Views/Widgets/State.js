define(['backbone', 'Templates'], function(Backbone, template) {
  
  var StateWidget = Backbone.View.extend({
    
    el: '#StateWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/stateWidget.jade']());
    
    }
    
  });
  return StateWidget;

});