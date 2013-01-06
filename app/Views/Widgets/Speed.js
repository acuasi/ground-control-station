define(['backbone', 'Templates'], function(Backbone, template) {
  
  var SpeedWidget = Backbone.View.extend({
    
    el: '#speedWidget',
    className: 'widget',
    
    render: function() {

      this.$el.html(template['app/Templates/speedWidget.jade']({speed: this.model.get('speed')}));
    
    }
    
  });
  return SpeedWidget;

});