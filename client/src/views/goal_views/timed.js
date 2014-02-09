var Backbone = require('backbone');

var GoalTimedView = module.exports = Backbone.View.extend({
    template: require('../../../templates/goal_templates/timed.hbs'),
    initialize: function(){
        //this.goalsView = new Goal
    },
    render: function() {
        this.$el.html(this.template());
        return this;

    }
});
