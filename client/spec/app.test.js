var Backbone = require('backbone'),
    _ = require('underscore'),
    TodayView = require('../src/views/today');

describe('lifeMite App', function() {

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

                        var data = {
                            'en-us': 'cat',
                            'ko': '고양이',
                            'es': 'gato',
                            'ru': 'кошка',
                            'de': 'Katze',
                            'ja': '猫',
                            'fr': 'chat',
                            'pt': 'gato'
                        };
                        var testLocale;

                        beforeEach(function() {
                            testLocale = function(locale) {
                                app.config.language = locale;
                                app.initialized = false;

                                function initApp(){
                                    app.initialize();
                                }
                                function test(){
                                   expect(app.loc.__('test-word-cat')).toEqual(data[locale]);
                                }

                                runs(initApp);
                                waitsFor(function(){
                                    return app.initialized;
                                });
                                runs(test);
                            };
                        });

                        it('THEN: present text in English', function () {
                            expect(app.loc.__('test-word-cat')).toEqual(data['en-us']);
                        });
                        it('OR present text in Korean', function () {
                            testLocale('ko');
                        });
                        it('OR present text in Spanish', function () {
                            testLocale('es');
                        });
                        it('OR present text in Russian', function () {
                            testLocale('ru');
                        });
                        it('OR present text in German', function () {
                            testLocale('de');
                        });
                        it('OR present text in Japanese', function () {
                            testLocale('ja');
                        });
                        it('OR present text in French', function () {
                            testLocale('fr');
                        });
                        it('OR present text in Portuguese', function () {
                            testLocale('pt');
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

