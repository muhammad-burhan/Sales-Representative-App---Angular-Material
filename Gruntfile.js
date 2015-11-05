module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	/*concat: {
		dist: {
			src: [
				'js/libs*//*.js', // All JS in the libs folder
				'js/global.js'  // This specific file
			],
			dest: 'js/build/production.js',
		}
	},*/
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
    }
    },
	imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: 'images/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
},
watch: {
options: {
        livereload: true,
    },
    scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
            spawn: false,
        },
    },
	css: {
    files: ['css/*.scss'],
    tasks: ['sass'],
    options: {
        spawn: false,
    }
}
},
sass: {
    dist: {
        options: {
            style: 'compressed'
        },
        files: {
            'css/build/global.css': 'css/global.scss'
        }
    } 
}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', [/*'concat',*/ 'uglify', 'imagemin', 'watch', 'sass']);

};