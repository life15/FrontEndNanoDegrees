/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    responsive_images: {
      dev: {
        options: {
          eigine: 'im',
          sizes: [{
            name: "large",
            width: 1920,
            suffix: "_2x",
            separator: "_"
          },{
            name: "large",
            width: 960,
            suffix: "_1x",
            separator: "_"
          },{
            name: "small",
            width: 640,
            suffix: "_2x",
            separator: "_"

          },{
            name: "small",
            width: 320,
            suffix: "_1x",
            separator: "_"
          }]
        },
        files: [{
          expand: true,
          src: ['*.jpg'],
          cwd: 'img/',
          dest: 'img/'
        }]
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-responsive-images');

  // Default task.
  grunt.registerTask('default', ['responsive_images']);

};
