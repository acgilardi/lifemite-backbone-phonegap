var Backbone = require('backbone'),
    TodayView = require('../../src/views/today');

describe('TodayView', function() {

    var todayView;

    beforeEach(function() {
        app.router.today();
        todayView = app.views.currentView;
    });

    story('As a new user, I can be guided on the today view the first time, So that I can lear how it works',
        function () {

            scenario(
                'SCENARIO: Guide me',
                'GIVEN: this is my first time launching the app',
                function () {
                    describe('WHEN: the today view is presented', function () {
                        beforeEach(function() {
                            spyOn(todayView, 'presentGuide');
                            todayView.render();
                        });
                        it('THEN: show a guide overlay', function () {
                            //expect(true).toEqual(true);
                            expect(app.views.currentView instanceof TodayView).toBeTrue();
                            expect(app.models.preference.get('firstVisit')).toEqual(true);
                            expect(app.views.currentView.presentGuide).toHaveBeenCalled();
                        });
                    });
                }
            ); // end scenario

        }
    ); // end story
});
