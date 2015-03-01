'use strict';


module.exports = function(grunt){

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    jshint:{
      dev:{
        options: {
          jshintrc: '.jshintrc'
        },
        src: ['Gruntfile.js','index.js','lib/**/*.js','test/**/*.js']
      }
    },
    simplemocha:{
      all:{
        src:['test/**/*.js']
      }
    },
    watch:{
      scripts:{
        files:['Gruntfile.js','index.js','lib/**/*.js','test/**/*.js'],
        tasks:['jshint']
      }
    }

  });
  grunt.registerTask('test', ['jshint:dev', 'simplemocha:all']);
  grunt.registerTask('default', ['test']);
};