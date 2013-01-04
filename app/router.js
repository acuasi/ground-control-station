define([
  // Application.
  "app",
  "Views/Try"
],

function(app, TryView) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      var v = new TryView();
      v.render();
    }
  });

  return Router;

});