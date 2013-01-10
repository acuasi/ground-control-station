define(['backbone', 'Templates'], function(Backbone, template) {
  
  var GpsWidget = Backbone.View.extend({
    
    el: '#gpsWidget',
    className: 'widget',
    
    initialize: function() {

      _.bindAll(this);
      this.model.on('change:lat', this.render);
      this.model.on('change:lon', this.render);
      this.model.on('change:fix_type', this.render);
      this.model.on('change:satellites_visible', this.render);

    },

    render: function() {

        this.$el.html(template['app/Templates/gpsWidget.jade'](
        {
            lat: this.model.get('lat'),
            lon: this.model.get('lon'),
            fix_type: this.model.get('fix_type'),
            satellites_visible: this.model.get('satellites_visible')
        }
        ));
    
    }
    
  });
  return GpsWidget;

});


// fix_type: undefined,
// satellites_visible: undefined,