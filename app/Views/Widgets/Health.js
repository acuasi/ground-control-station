define(['backbone', 'Templates'], function(Backbone, template) {
  
  var HealthWidget = Backbone.View.extend({
    
    el: '#healthWidget',
    className: 'widget',
    
    initialize: function() {

      _.bindAll(this);
      this.model.on('change:type', this.render);
      this.model.on('change:autopilot', this.render);
      this.model.on('change:base_model', this.render);
      this.model.on('change:custom_mode', this.render);
      this.model.on('change:system_status', this.render);
      this.model.on('change:mavlink_version', this.render);

    },

    render: function() {

        this.$el.html(template['app/Templates/healthWidget.jade'](
            {
                type: this.model.get('type'),
                autopilot: this.model.get('autopilot'),
                base_mode: this.model.get('base_mode'),
                custom_mode: this.model.get('custom_mode'),
                system_status: this.model.get('system_status'),
                mavlink_version: this.model.get('mavlink_version')
            }
        ));
    
    }
    
  });
  return HealthWidget;

});
