var Backbone = require('backbone');

var Settings = module.exports = Backbone.Model.extend({
    defaults: {
        firstVisit: true,
        locale: 'en-US'
    }
});
