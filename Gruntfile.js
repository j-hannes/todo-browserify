'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt); 
  require('time-grunt')(grunt);

  grunt.initConfig({
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          'app/index.html'
        ]
      }
    },
    connect: {
      options: {
        port: 2014,
        livereload: 35678,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            'app'
          ]
        }
      }
    }
  });
  
  grunt.registerTask('serve', function(target) {
    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });
};
