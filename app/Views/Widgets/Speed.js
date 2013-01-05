define(['backbone', 'Templates'], function(Backbone, template) {
  
  var SpeedWidget = Backbone.View.extend({
    el: '#speedWidget',
    render: function() {
      this.$el.html(template['app/Templates/speedWidget.jade']({speed: 10}));
    }
  });
  return SpeedWidget;

});