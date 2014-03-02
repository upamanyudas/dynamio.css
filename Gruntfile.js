module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  pkg: grunt.file.readJSON('package.json'),
  grunt.initConfig({

    // Concatenate CSS files
    concat: {
      dist: {
        src: [
          // _base.css required for .animated helper class
          'source/_base.css',
          'source/**/*.css'
        ],
        dest: 'dynamio.css'
      }
    },

    // Auto-prefix CSS properties using Can I Use?
    autoprefixer: {
      options: {
        browsers: ['last 3 versions', 'bb 10', 'android 3']
      },
      no_dest: {
        // File to output
        src: 'dynamio.css'
      },
    },

    // Minify CSS
    cssmin: {
      minify: {
        src: ['dynamio.css'],
        dest: 'dynamio.min.css',
      },
    },

    // Watch files for changes
    watch: {
      css: {
        files: [
          'source/**/*',
          '!node_modules',
          'dynamio-config.json'
        ],
        // Run Sass, autoprefixer and CSSmin
        tasks: ['concat-anim', 'autoprefixer', 'cssmin'],
      }
    }

  });

  // Register our tasks
  grunt.registerTask('default', ['concat-anim', 'autoprefixer', 'cssmin', 'watch']);

  grunt.registerTask('concat-anim', 'Concatenates activated animations', function () {
    var config = grunt.file.readJSON('dynamio-config.json'),
        target = [ 'source/_base.css' ],
        count = 0

    for (var cat in config) {
      for (var file in config[cat]) {
        if (config[cat][file]) {
          target.push('source/' + cat + '/' + file + '.css')
          count++
        }
      }
    }

    if (!count) {
      grunt.log.writeln('No animations activated.')
    }

    grunt.log.writeln(count + (count > 1 ? ' animations' : ' animation') + ' activated.')

    grunt.config('concat', { 'dynamio.css': target })
    grunt.task.run('concat')
  });
};
