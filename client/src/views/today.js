var Backbone = require('backbone');

var TodayView = module.exports = Backbone.View.extend({
    template: require('../../templates/today.hbs'),
    events: {
        'click #nav-add': 'onAdd'
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    
        return this;
    },
    onAdd: function() {
        app.router.add();
    }
});
