define(['backbone', 'Templates',

  // Models
  'Models/Mission',

  // Widgets (subviews)
  'Views/Widgets/Speed'

  ], function(Backbone, template,
    Mission,
    SpeedWidget) {
  
  var MissionView = Backbone.View.extend({

    model: Mission,
    el: '#missionView',
    hasRendered: false,

    initialize: function() {
      
    },
    
    render: function() {
      
      if(false === this.hasRendered) { this.renderLayout(); }
      
    },

    // Meant to be run only once; renders scaffolding and subviews.
    renderLayout: function() {

      // Render scaffolding
      this.$el.html(template['app/Templates/missionLayout.jade']());
      
      // Instantiate subviews, now that their elements are present on the page
      this.speedWidget = new SpeedWidget({model: this.model.get('platform')});

      // Render party
      this.speedWidget.render();
    }

  });

  return MissionView;

});