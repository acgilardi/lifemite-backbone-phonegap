/* global app, require, jasmine, beforeEach, afterEach */


story = function(storyName, scenarios) {
    describe(storyName, scenarios);
};

scenario = function(scenarioName, given, test) {
    describe(scenarioName, function () {
        describe(given, test);
    });
};

(function(){
    'use strict';

    require('jasmine-expect');

    var Backbone = require('backbone'),
        App = require('../src/app');

    config.dbName = 'lifemitedb_test';
    config.dbForceNew = true;

    beforeEach(function() {
        if(Backbone.History.started) {
            Backbone.history.stop();
        }

        this.addMatchers({
            toBeA: function(expected) {
                return this.env.equals_(this.actual, jasmine.any(expected));
            }
        });


        // initialize the app. This is async so wait
        window.app = new App();
        config.dbForceNew = false;

        function initApp(){
            app.initialize();
        }
        runs(initApp);
        waitsFor(function(){
            return app.initialized;
        });
    });

    afterEach(function() {
        if(Backbone.History.started) {
            Backbone.history.stop();
        }
    });

})();



