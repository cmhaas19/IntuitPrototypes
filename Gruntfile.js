
module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    jsonfilelist: {
      files: ['assets/images/**/*.png']
    },

    watch: {
      options: {
        livereload: true
      },
      html: {
          files: ['index.html', 'app/views/**/*.html']
      },
      scripts: {
        files: ['app/**/*.js','assets/scripts/**/*.js','assets/vendor/**/*.js'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['assets/less/**/*.less'],
        tasks: ['less'],
        options: {
          spawn: false
        }
      }
    },

    connect: {
      server: {
        options: {
          port: 8000,
          base: './'
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ["assets/less/modules","assets/less/concepts"]
        },
        files: {
          "assets/css/prototype.css" : "assets/less/prototype.less"
        }
      }
    },

    folder_list: {
      default_options: {
        options: {
          files: true,
          folders: false
        },
        files: {
          'imagelist.json': ['assets/images/**']
        }  
      }      
    }

  });  

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('dev', ['folder_list', 'less', 'connect', 'watch']);

  grunt.registerTask('compile', ['folder_list', 'less']);

};
