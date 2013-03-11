define(['backbone', 'Templates'], function(Backbone, template) {
  
  var CommsWidget = Backbone.View.extend({
    
    el: '#commsWidget',
    className: 'widget',
    
    initialize: function() {
      _.bindAll(this);
      this.model.on('change:drop_rate_comm', this.render);
      this.model.on('change:errors_comm', this.render);
    },

    render: function() {

        this.$el.html(template['commsWidget'](
            {
                drop_rate_comm: this.model.get('drop_rate_comm'),
                errors_comm: this.model.get('errors_comm')
            }
        ));
    
    }
    
  });
  return CommsWidget;

});