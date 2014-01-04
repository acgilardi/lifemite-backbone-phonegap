var Backbone = require('backbone');

var TodayView = module.exports = Backbone.View.extend({
    template: require('../../templates/today.hbs'),
    render: function() {
        this.$el.html(this.template(this));
        return this;
    }
});
