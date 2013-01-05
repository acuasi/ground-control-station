define(['backbone', 'Templates',

  // Models
  'Models/Platform',

  // Widgets (subviews)
  'Views/Widgets/Speed'

  ], function(Backbone, template, Platform,
    SpeedWidget) {
  
  var MissionView = Backbone.View.extend({

    model: Platform,
    el: '#missionView',

    initialize: function() {
      this.speedWidget = new SpeedWidget();
    },
    
    render: function() {
      this.$el.html(template['app/Templates/missionLayout.jade']());
      this.speedWidget.render();
      console.log(this.speedWidget);
    }

  });

  return MissionView;

});