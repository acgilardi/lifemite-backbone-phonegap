var Backbone = require('backbone');

var AddView = module.exports = Backbone.View.extend({
    template: require('../../templates/add.hbs'),
    render: function() {
        this.$el.html(this.template(/*this.model.toJSON()*/));
        return this;
    }
});
