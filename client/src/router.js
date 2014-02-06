var Backbone = require('backbone'),
    TodayView = require('./views/today'),
    AddView = require('./views/add'),
    Template = require('./models/template'),
    Templates = require('./collections/templates'),
    PageSlider = require('./services/pageslider');

var Router = module.exports = Backbone.Router.extend({
    initialize: function(options) {
        this.views = ['today', 'add'];
        this.slider = new PageSlider($('body'));
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

//        var templates = new Templates();
//        var data2;
//        templates.fetch({
//            success: function(data) {
//                data2 = data;
//            }
//        });

        //this.showView(new TodayView({model: holdData}));
        //this.navigate('today');
    },
    add: function() {
        me = this;
        //me.slider.slidePage(new AddView().$el);
        me.showView(new AddView());
        me.navigate('add');
    },
    navigateStep: function(stepName) {
        if(this[stepName] !== undefined) {
            this[stepName]();
        }
    },
    showView: function(view, model) {
        this.destroyCurrentView();

        app.views.currentView = view;
        //app.views.currentView.setElement(Backbone.$('.lifemite-app')).render();
        view.render();
        this.slider.slidePage(view.$el);
    },
    destroyCurrentView: function() {
        if(app.views.currentView) {
            app.views.currentView.close();
            delete app.views.currentView;
        }
    }
});

