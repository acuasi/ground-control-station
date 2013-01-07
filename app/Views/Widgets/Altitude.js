define(['backbone', 'Templates'], function(Backbone, template) {
  
  var AltitudeWidget = Backbone.View.extend({
    
    el: '#altitudeWidget',
    className: 'widget',

    initialize: function(){
      _.bindAll(this);
      this.model.on("change:alt", this.render, this);
    },
    render: function() {
      console.log("rendering alt");
      this.$el.html(template['app/Templates/altitudeWidget.jade']({alt: this.model.get('alt')}));
    }
    
  });
  return AltitudeWidget;

});