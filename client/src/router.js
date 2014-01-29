var Backbone = require('backbone'),
    TodayView = require('./views/today'),
    Template = require('./models/template'),
    Templates = require('./collections/templates');

var Router = module.exports = Backbone.Router.extend({
    initialize: function(options) {
        this.views = ['today', 'about', 'listinfo', 'coi'];
    },
    routes: {
        '': 'root',
        ':step': 'navigateStep',
        'settings': 'settingsDetails'

    },
    root: function() {
        this.today();
    },

    // handle data
    settingsDetails: function() {

    },

    today: function() {
        var template = new Template({id: 1});
        var holdData;

        var me = this;
        template.fetch({
            success: function(data) {
                var s = "hod";
                holdData = data;

                me.showView(new TodayView({model: holdData}));
                me.navigate('today');
            }
        });

        var templates = new Templates();
        var data2;
        templates.fetch({
            success: function(data) {
                data2 = data;
            }
        });

        //this.showView(new TodayView({model: holdData}));
        //this.navigate('today');
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

