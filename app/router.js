define([
  // Application.
  "app",

  // Models
  "Models/Mission",
  "Models/Platform",

  // Dependent views
  "Views/Mission"
],

function(app,
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
      this.platform = new Platform();
      this.mission = new Mission({
        platform: this.platform
      });
      this.missionView = new MissionView({
        model: this.mission
      });
      this.missionView.render();
    }

  });

  return Router;

});