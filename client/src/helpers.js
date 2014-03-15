var Backbone = require('backbone'),
    _ = require('underscore');

// Add a close() function to all Backbone.Views. Check for beforeClose()
Backbone.View.prototype.close = function () {
//    if (this.beforeClose) {
//        this.beforeClose();
//    }
    this.$el.empty();
    this.stopListening();
    this.undelegateEvents();
    this.unbind();
};
//
//Backbone.View.prototype.assign = function (selector, view) {
//    var selectors;
//
//    if (_.isObject(selector)) {
//        selectors = selector;
//    }
//    else {
//        selectors = {};
//        selectors[selector] = view;
//    }
//
//    if (!selectors) return;
//
//    _.each(selectors, function (view, selector) {
//        view.setElement(this.$(selector)).render();
//    }, this);
//};