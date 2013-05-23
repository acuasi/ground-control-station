define([

  // Application + dependencies
  "app",
  "now",

  // Models
  "Models/Mission",
  "Models/Platform",
  "Models/Connection",

  // Dependent views
  "Views/Mission"
],

function(app, now,
  Mission,
  Platform,
  Connection,
  MissionView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({

    routes: {
      "": "mission",
      "mission": "mission"
    },
    
    mission: function() {

      var platform = this.platform = new Platform();
      var connection = this.connection = new Connection();

      this.mission = new Mission({
        platform: this.platform,
        connection: this.connection
      });

      this.missionView = new MissionView({
        model: this.mission
      });

      // Assign locally for calling once the Now connection is ready
      var missionView = this.missionView;
      
      // Handle message events as they are provided from the server
      // This won't scale =P
      now.ready(function(){

        missionView.render();

        now.updatePlatform = function(platformJson) {
          platform.set(platformJson);
        };

        now.updateConnection = function(connectionJson) {
          connection.set(connectionJson);
          console.log(connection.toJSON());
        }

      });

    }

  });

  return Router;

});