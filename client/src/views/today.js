var Backbone = require('backbone');//,
    //GoalsView = require('./goals'),
    //GoalsCollection = require('../collections/goals');

var TodayView = module.exports = Backbone.View.extend({
    template: require('../../templates/today.hbs'),
    initialize: function(){
        //this.goals = new GoalsCollection();
        this.render();
    },
    events: {
        //'click #nav-add': 'onAdd'
    },
    render: function() {

//        this.$el.html(this.template());
//
//
//        var self = this;
//        console.log('fetching...');
//        this.goals.fetch({
//            success: function(data) {
//                console.log('fetched');
//                var view =  new GoalsView({collection: data});
//                self.assign('#goals-view', view);
//            }
//        });

        // show guide on first visit
        if (app.models.preference.get('firstVisit') === true) {
            this.presentGuide();
        }


//        return this;
    },
    presentGuide: function() {

    }
//    onAdd: function() {
//        //app.router.add();
//    }
});
