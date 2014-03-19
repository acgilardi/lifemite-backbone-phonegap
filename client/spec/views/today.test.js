//require('./spec_helper');
//
//var App = require('../src/app.js'),
// Backbone = require('backbone'),
    _ = require('underscore'),
    TodayView = require('../src/views/today');
//
//config.dbName = 'lifemitedb_test';
//config.dbForceNew = true;
//
//describe('lifeMite App', function() {
//    beforeEach(function() {
//        app = new App();
//        config.dbForceNew = false;
//
////        var done;
//        function initApp(){
//            app.initialize();
//        }
//        runs(initApp);
//        waitsFor(function(){
//            return app.initialized;
//        });
//    });
//    afterEach(function () {
//        app = undefined;
//    });
//
////    story('As a new user, I can be guided on the today view the first time, So that I can lear how it works',
////        function () {
////
////            scenario(
////                'SCENARIO: Guide me',
////                'GIVEN: this is my first time launching the app',
////                function () {
////                    describe('WHEN: the today view is presented', function () {
////                        it('THEN: show a guide overlay', function () {
////                            spyOn(app.views.currentView, 'presentGuide');
////
////                            expect(app.views.currentView instanceof TodayView).toBeTrue();
////                            expect(app.models.preference.get('firstVisit')).toEqual(true);
////                            expect(app.views.currentView.presentGuide).toHaveBeenCalled();
////                        });
////                    });
////                }
////            ); // end scenario
////
////        }
////    ); // end story
//});
