define([

  // Application + dependencies
  "app",
  "now",

  // Models
  "Models/Mission",
  "Models/Platform",

  // Dependent views
  "Views/Mission"
],

function(app, now,
  Mission,
  Platform,
  MissionView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({

    routes: {
      "": "mission",
      "mission": "mission"
    },
    
    mission: function() {

      var platform = this.platform = new Platform();
      this.mission = new Mission({
        platform: this.platform
      });

      this.missionView = new MissionView({
        model: this.mission
      });

      this.missionView.render();

      // Handle message events as they are provided from the server
      // This won't scale =P
      now.ready(function(){

        now.updatePlatform = function(platformJson) {
          platform.set(platformJson);
          console.log(platform.toJSON());
        };

      });

    }

  });

  return Router;

});