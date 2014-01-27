var Backbone = require('backbone');

var Preferences = module.exports = Backbone.Model.extend({
    defaults: {
        firstVisit: true,
        locale: 'en-US'
    },
    urlRoot: "/settings",
    initialize: function() {
    }
});
