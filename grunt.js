module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    // Define some common paths to reuse through the config
    meta : {
      src   : 'app/**/*.js',
      specs : 'spec/**/*.js'
    },

    // The Jade task must be run prior to this task, because the Backbone views
    // reference templates via require().
    requirejs: {
      compile: {
        options: {
          baseUrl: "app/",
          mainConfigFile: "app/config.js",
          out: "public/javascripts/required.js",
          name: "main"
        }
      }
    },

    watch: {
      
      scripts: {
        files: '<%= meta.src %>',
        tasks: ['default'],
        options: {
          interrupt: true
        }
      },

      templates: {
        files: 'app/Templates/**/*.jade',
        tasks: ['jade requirejs'],
        options: {
          interrupt: true
        }
      }
    },

    jade: {
      amd: {
        options: {
          amd: true,
          runtimeName: 'jade'
        },
        files: {
          'app/Templates.js': 'app/Templates/*.jade'
        }
      }
    },

    jasmine : {
      all: ['test/jasmine/index.html']
    },

    simplemocha: {
      all: {
        src: 'test/mocha/*.js',
        options: {
          globals: ['should'],
          timeout: 3000,
          ignoreLeaks: false,
          ui: 'bdd'
        }
      }
    },

    // Not really necessary since Express is doing it, but perhaps
    // for bundling/packaging.
    less: {
      all: {
        files: {
          'public/stylesheets/assets.css' : 'assets/less/style.less'
        }
      }
    }
  });

  // Load additional tasks.
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jade-plugin');
  grunt.loadNpmTasks('grunt-jasmine-task');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Task registration.
  // Jade must be compiled to templates before the requirejs task can run,
  // because the Backbone views require templates.
  grunt.registerTask('default', 'jade requirejs less');

};