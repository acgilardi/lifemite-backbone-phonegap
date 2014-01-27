var Backbone = require('backbone');

// Add a close() function to all Backbone.Views. Check for beforeClose()
Backbone.View.prototype.close = function () {
    if (this.beforeClose) {
        this.beforeClose();
    }
    this.$el.empty();
    this.undelegateEvents();
    this.unbind();
};

