var Jquery = require('jquery'),
    Router = require('./router.js'),
    Settings = require('./models/settings.js'),
    Backbone = require('backbone');

Backbone.$ = Jquery;

// Add a close() function to all Backbone.Views. Check for beforeClose()
Backbone.View.prototype.close = function () {
    if (this.beforeClose) {
        this.beforeClose();
    }
    Backbone.$(this.el).empty();
    this.unbind();
};

var App = module.exports = function App(){};

App.prototype = {
    views: {},
    models: {},
    collections: {},
    router: {},
    initialize: function() {
        this.bindEvents();
        this.router = new Router();
        this.models.settings = new Settings();
        Backbone.history.start();
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



