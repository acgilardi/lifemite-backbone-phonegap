require('./app_config');

var Jquery = require('jquery'),
    Router = require('./router'),
    Helpers = require('./helpers'),
    Preferences = require('./models/preferences'),
    Backbone = require('backbone'),
    DataService = require('./services/data'),
    Upgrades = require('./services/upgrades'),
    I18n = require('./services/i18n');

Backbone.$ = Jquery;

var App = module.exports = function(){};

App.prototype = {
    loc: {},
    views: {},
    models: {},
    collections: {},
    router: {},
    db: {},

    initialize: function() {
        this.bindEvents();
        this.loc = new I18n({
            //these are the default values, you can omit
            directory: "locales",
            locale: AppConfig.language,
            extension: ".json"
        });
        this.router = new Router();

        var me = this;

        // instantiate indexeddb
        var options = {
            databaseName: AppConfig.databaseName,
            version: AppConfig.databaseVersion,
            forceNew: AppConfig.databaseForceRebuild,
            upgrades: Upgrades()
        };
        DataService(options, function(error, db) {
            console.log('DataService complete');
            me.db = db;
            //me.models.settings = new Settings();
            Backbone.history.start();
        });
    },
    // Bind Event Listeners
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



