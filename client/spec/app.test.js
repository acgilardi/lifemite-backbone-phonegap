var App = require('../src/app.js'),
    Backbone = require('backbone');

describe('lifemite', function() {

    beforeEach(function() {
        Backbone.history.stop();
        app = new App();
        app.initialize();
    });

    it('should have app object', function() {
        expect(app).toBeDefined();
    });

    describe('app', function() {
        it('should have router', function() {
            expect(app.router).toBeDefined();
        });

        it("should contain settings", function () {
            expect(app.models.settings).toBeDefined();
        });
    });
});
