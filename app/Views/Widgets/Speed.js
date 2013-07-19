define(['backbone', 'Templates'], function(Backbone, template) {
  
  var SpeedWidget = Backbone.View.extend({
    
    el: '#speedWidget',
    className: 'widget',
    
    initialize: function() {
      _.bindAll(this);
      this.model.on('change:groundspeed', this.render);
    },

    render: function() {

      this.$el.html(template['speedWidget'](
        {groundspeed: Number(this.model.get('groundspeed')).toFixed(0)}));
    
    }
    
  });
  return SpeedWidget;

});