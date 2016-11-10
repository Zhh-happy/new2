module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    
    uglify: {
      build: {
        src: 'src/js/new.js',
        dest: 'build/js/new.min.js'
      }
    },
    htmlmin: { // Task 
		dist: { // Target 
			options: { // Target options 
				removeComments: true,
				collapseWhitespace: true
			},
			files: { // Dictionary of files 
				'build/index.html': 'src/index.html' // 'destination': 'source' 
			}
		}
	},
	cssmin: {
		options: {
			shorthandCompacting: false,
			roundingPrecision: -1
		},
		target: {
		files: {
			'build/css/style.css': 'src/css/style.css'
		}
	}
	}
    
});

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
   // 默认被执行的任务列表。
   grunt.registerTask('default', ['uglify','htmlmin','cssmin']);

};