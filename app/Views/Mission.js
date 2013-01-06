define(['backbone', 'Templates',

  // Models
  'Models/Mission',

  // Widgets (subviews)
  'Views/Widgets/Speed',
  'Views/Widgets/Map'

  ], function(Backbone, template,
    Mission,
    SpeedWidget,
    MapWidget
  ) {
  
  var MissionView = Backbone.View.extend({

    model: Mission,
    el: '#missionView',
    hasRendered: false,

    initialize: function() {
      _.bindAll(this);
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
      this.mapWidget = new MapWidget({model: this.model.get('platform')});

      // Render party
      this.speedWidget.render();
      this.mapWidget.render();

      this.model.get('platform').on('change', function(e) {
        console.log('changed');
      });
    }

  });

  return MissionView;

});