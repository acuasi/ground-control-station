// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // libs is for any utility libraries written for this project.
    libs: "../assets/js/libs",

    // vendor is for external, 3rd party libraries used in this project.
    vendor: "../assets/vendor",

    // Libraries.
    jquery: "../assets/js/vendor/jquery",
    underscore: "../assets/js/vendor/underscore",
    backbone: "../assets/js/vendor/backbone",
    jade: "../assets/js/vendor/jade"
    
  },

  shim: {

    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
      
    }
  }

});
