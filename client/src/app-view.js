var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var AppView = module.exports = Backbone.View.extend({
    initialize: function(){
        this.render();
    },

    render: function(){
        console.log('wuuut')
        $('body').prepend('<p>wooooooooooooooo</p>');
    }
});