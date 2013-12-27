/*global module:false*/
module.exports = function (grunt) {

    require('time-grunt')(grunt);
    //require('load-grunt-tasks')(grunt,{ pattern: ['grunt-*', '!grunt-cli']} );

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
            },
            test: {
                src: ['build/app.js','build/spec.js']
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
                    'build/app.js': ['client/src/**/*.js']
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

        jshint: {
            files: ['Gruntfile.js', 'client/src/**/*.js'],
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                boss: true,
                devel: true,
                eqnull: true,
                browser: true,
                globals: {
                    cordova: true
                }
            }
        },

        watch: {
            files: [
                ['client/src/**/*.js', 'client/spec/**/*.js']
            ],
            tasks: ['build:test'],
            karma: {
                files: ['client/src/**/*.js', 'client/spec/**/*.js'],
                tasks: ['karma:unit:run']
            }
        },

        karma: {
            unit: {
                configFile: './karma.conf.js',
                background: false,
                autoWatch: true
            }
        }
    });

    // Load tasks
    grunt.loadNpmTasks('grunt-browserify');
    //grunt.loadNpmTasks('grunt-bower');
    //grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    // Custom tasks
    grunt.registerTask('init:dev', ['clean', 'bower', 'browserify:vendor']);

    grunt.registerTask('build', ['clean:dev', 'browserify:app', 'browserify:test', 'concat', 'copy:dev', 'uglify'])
    grunt.registerTask('build:test', ['browserify:app', 'browserify:test']);

    grunt.registerTask('tdd', ['karma:unit','watch']);

    grunt.registerTask('server', ['watch']);

    //grunt.registerTask('min', ['uglify']); // polyfil for uglify
//    grunt.registerTask('debug', 'Create a debug build', function (platform) {
//        grunt.task.run('jshint', 'concat', 'min');
//        grunt.task.run('shell:debug_' + platform);
//    });

    // Default task
    //grunt.registerTask('default', ['watch']);




};
