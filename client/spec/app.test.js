require('./spec_helper');


var App = require('../src/app.js'),
    Backbone = require('backbone'),
    _ = require('underscore'),
    TodayView = require('../src/views/today');

describe('lifeMite App', function() {

    beforeEach(function() {
        //Backbone.history.stop();
        app = new App();
        app.initialize();
    });

    story('As a user, I can launch the app, So that I can interact with it',
        function() {

            scenario(
                'SCENARIO: starting the app',
                'GIVEN: the app is not started',
                function() {
                    describe('WHEN: user starts the app', function () {
                        it('THEN: a new instance of the app will launch', function () {
                            expect(app).toBeDefined();
                        });
                    });
                }
            ); // end scenario

        }
    ); // end story

    story('As a user, I can see text in my devices language, So that I can read',
        function () {

            scenario(
                'SCENARIO: my app is language specific',
                'GIVEN: my device language is set',
                function () {
                    // languages supported English, Korean, Spanish, Russian, German, Japanese, French, Portugese
                    describe('WHEN: the app is running', function () {
                        it('THEN: core text is present in defined language', function () {
                            var data = [
                                {language: 'en-us', word: 'cat'},
                                {language: 'ko', word: '고양이'},
                                {language: 'es', word: 'gato'},
                                {language: 'ru', word: 'кошка'},
                                {language: 'de', word: 'Katze'},
                                {language: 'ja', word: '猫'},
                                {language: 'fr', word: 'chat'},
                                {language: 'pt', word: 'gato'},
                            ];

                            _.each(data, function(item, index, items) {
                                app.config.language = item.language;
                                app.initialize();
                                expect(app.loc.__('test-word-cat')).toEqual(item.word);
                            }, app);

                        });
                    });
                }
            ); // end scenario

        }
    ); // end story

    story('As a user, I can see the today view as my hero screen, So that I can see today at a glance',
        function () {

            scenario(
                'SCENARIO: today view first',
                'GIVEN: the app is not open yet',
                function () {
                    describe('WHEN: I start the app', function () {
                        it('THEN: the today view will be shown', function () {
                            expect(app.views.currentView instanceof TodayView).toBeTrue();
                        });
                    });
                }
            ); // end scenario

        }
    ); // end story
});

//    describe('As a user, I can launch the app, so that I can interact with it', function () {
//
//        scenario(
//            'Scenario: Starting the app',
//            'Given: the app is not started',
//            function() {
//                describe('When: user starts the app', function () {
//                    it('Then: a new instance of the app will launch', function () {
//                        expect(app).toBeDefined();
//                    });
//                });
//            }
//        );
//
//    });
//
//
//
//    describe('Scenario: Today view first', function () {
//        describe('Given the app is not started', function () {
//            describe('When user starts the app', function () {
//                it('Then the today view will be shown', function () {
//                    expect(app).toBeDefined();
//                });
//            });
//        });
//    });
//
//    it('should present text in my devices language', function () {
//        var catEnglish = "cat";
//        var catGerman = "Katze";
//
//        appConfig.language = 'de';
//        app.initialize();
//        expect(app.loc.__('test-word-cat')).toEqual(catGerman);
//
//        appConfig.language = 'en-us';
//        app.initialize();
//        expect(app.loc.__('test-word-cat')).toEqual(catEnglish);
//    });

