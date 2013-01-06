module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

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
      
      all: {
        files: ['./app/**/*.js', './app/Templates/**/*.jade', './spec/**/*.js', 'assets/js/libs/**/*.js'],
        tasks: ['jade requirejs'],
        options: {
          interrupt: true
        }
      },

      styles: {
        files: ['assets/less/**/*.less', 'assets/css/**/*.css'],
        tasks: ['less mincss'],
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
          'build/Templates.js': 'app/Templates/*.jade'
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
          'build/less.css' : 'assets/less/assets.less'
        }
      }
    },

    // Must be after the less task, or that won't get minified
    // into the final client file.
    mincss: {
      compress: {
        files: {
          "public/stylesheets/min.css": ["build/less.css", "assets/css/**/*.css"]
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
  grunt.loadNpmTasks('grunt-contrib-mincss');

  // Task registration.
  // Jade must be compiled to templates before the requirejs task can run,
  // because the Backbone views require templates.
  grunt.registerTask('default', 'jade requirejs less mincss');

};