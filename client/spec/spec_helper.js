story = function(storyName, scenarios) {
    describe(storyName, scenarios);
};

scenario = function(scenarioName, given, test) {
    describe(scenarioName, function () {
        describe(given, test);
    });
};


/* global app, require, jasmine, beforeEach, afterEach, sinon, AW */
(function(){
    'use strict';


    require('jasmine-expect');

    config.dbName = 'lifemitedb_test';
    config.dbForceNew = true;

    var Backbone = require('backbone');
       /// $ = require('jquery');

    beforeEach(function() {
        if(Backbone.History.started) {
            Backbone.history.stop();
        }



        this.addMatchers({
            toBeA: function(expected) {
                return this.env.equals_(this.actual, jasmine.any(expected));
            }
        });
//
//        app = new NUE();
//        app.initialize();
//        this.nodeServer.respond();
    });

    afterEach(function() {
        if(Backbone.History.started) {
            Backbone.history.stop();
        }
    });

})();


