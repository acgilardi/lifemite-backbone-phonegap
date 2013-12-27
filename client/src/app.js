var Router = require('./router.js');
var Settings = require('./models/settings.js')

app = new function(){
    this.router = new Router();
    this.settings = new Settings();
};




