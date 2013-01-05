define([
  // Application.
  "app",

  // Dependent views
  "Views/Mission"
],


function(app, MissionView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "mission": "mission"
    },

    index: function() {},

    mission: function() {
      this.missionView = new MissionView();
      this.missionView.render();
    }

  });

  return Router;

});