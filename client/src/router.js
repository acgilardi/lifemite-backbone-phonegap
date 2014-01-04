var Backbone = require('backbone'),
    TodayView = require('./views/today');

var Router = module.exports = Backbone.Router.extend({
    initialize: function(options) {
        this.views = ['today', 'about', 'listinfo', 'coi'];
    },
    routes: {
        '': 'root',
        ':step': 'navigateStep'
    },
    root: function() {
        this.today();
    },
    today: function() {
        this.showView(new TodayView());
        this.navigate('today');
    },
    navigateStep: function(stepName) {
        if(this[stepName] !== undefined) {
            this[stepName]();
        }
    },
    showView: function(view) {
        this.destroyCurrentView();

        app.views.currentView = view;
        app.views.currentView.setElement(Backbone.$('.lifemite-app')).render();
    },
    destroyCurrentView: function() {
        if(app.views.currentView) {
            app.views.currentView.close();
            delete app.views.currentView;
        }
    }
});

