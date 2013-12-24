/*global module:false*/
module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        bower: {
            install: {
                options: {
                    targetDir: 'client/vendor',
                    layout: 'byComponent',
                    cleanTargetDir: true
                }
            }
        },

        clean: {
            build: ['build'],
            dev: {
                src: ['build/app.js']
            }
        },

        browserify: {
            vendor: {
                src: ['client/vendor/**/*.js'],
                dest: 'build/vendor.js',
                options: {
                    alias: [
                        'client/vendor/jquery/js/jquery.js:jquery',
                        'client/vendor/backbone/js/backbone.js:backbone',
                        'client/vendor/underscore/js/underscore.js:underscore'
                    ]
                }
            },
            app: {
                files: {
                    'build/app.js': ['client/src/app.js']
                },
                options: {
                    external: ['jquery', 'underscore', 'backbone']
                }
            },
            test: {
                files: {
                    'build/spec.js': ['client/spec/**/*.test.js']
                },
                options: {
                    external: ['jquery', 'underscore', 'backbone']
                }
            }
        },

        concat: {
            'build/<%= pkg.name %>.js': ['build/vendor.js','build/app.js']
        },

        copy: {
            dev: {
                files: [{
                    src: 'build/<%= pkg.name %>.js',
                    dest: 'www/js/<%= pkg.name %>.js'
                }]
            }
        },

        uglify: {
            dist: {
                src: ['www/js/<%= pkg.name %>.js'],
                dest: 'www/js/<%= pkg.name %>.min.js'
            }
        },

        karma: {
            unit: {
                configFile: './karma.conf.js',
                background: false
            }
        }
    });

    // Custom tasks
    grunt.registerTask('init:dev', ['clean', 'bower', 'browserify:vendor']);

    grunt.registerTask('build', ['clean:dev', 'browserify:app', 'browserify:test', 'concat', 'copy:dev', 'uglify'])

    //grunt.registerTask("clean", ['clean:dev']);

    //grunt.registerTask('devmode', ['karma:unit', 'watch']);



    //grunt.registerTask('min', ['uglify']); // polyfil for uglify
//    grunt.registerTask('debug', 'Create a debug build', function (platform) {
//        grunt.task.run('jshint', 'concat', 'min');
//        grunt.task.run('shell:debug_' + platform);
//    });

    // Default task
    //grunt.registerTask('default', ['browserify', 'jshint', 'concat', 'min']);




};
