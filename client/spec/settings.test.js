var Backbone = require('backbone'),
    Settings = require('../src/models/settings.js');


describe('settings', function() {

    var settings;

    beforeEach(function() {
        this.addMatchers({
            toBeA: function(expected) {
                return this.env.equals_(this.actual, jasmine.any(expected));
            }
        });

        settings = new Settings();
    });

    it('should be a Backbone.Model', function() {
        expect(app.models.settings).toBeA(Backbone.Model);
    });

    it(" should have a first visit flag default to true", function () {
        expect(app.models.settings.get('firstVisit')).toEqual(true);
    });

    it("should store current locale as i18n string default to en-US", function () {
        expect(app.models.settings.get('locale')).toEqual('en-US');
    });

});
