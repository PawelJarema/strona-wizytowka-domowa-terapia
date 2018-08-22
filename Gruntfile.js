module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		express: {
			default: {
				options: {
					script: 'app.js',
					livereload: 35729
				}
			}
		},
		less: {
			development: {
				options: {
					paths: ['public/css']
				},
				files: {
					'public/css/s.css': 'public/css/styles.less'
				}
			}
		},
		watch: {
			scripts: {
				files: ['**/*.less', '**/*.pug', '**/*.js'],
				tasks: ['less'],
				options: {
					livereload: true
				}
			}
		},
		exec: {
			remove_dstore_from_thumbnails: {
				command: 'rm ./public/assets/thumbnails/.DS_Store'
			},
			remove_dstore_from_photos: {
				command: 'rm ./public/assets/thumbnails/.DS_Store'
			}
		}
	});

	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-exec');

	grunt.registerTask('default', ['express', 'watch']);
	grunt.registerTask('all', ['express', 'less', 'watch']);
	grunt.registerTask('clear', 'exec');
};