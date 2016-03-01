/**
 * Created by Abula on 12/16/2015.
 */
var express = require('express');

var app = module.exports = express();

app.configure(function(){
    // Here we require the prerender middleware that will handle requests from Search Engine crawlers
    // We set the token only if we're using the Prerender.io service
    app.use(require('prerender-node').set('prerenderToken', 'lrGvcTnGsG2PiKssl6tD'));
    app.use(express.static("views")); app.use(app.router);
});


// frontend routes =========================================================
// route to handle all angular requests
// This will ensure that all routing is handed over to AngularJS
app.get('*', function(req, res){
    res.sendfile('./views/index.html');
});

app.listen(8081);
console.log("Go Prerender Go!");