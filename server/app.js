var express = require('express');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
// var router = require('./routes.js');

var app = express();
module.exports.app = app;

var port = process.env.PORT || 4568;

// Set what we are listening on.
app.set("port", port);

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }));

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());


app.get('/test', function(req, res){
  res.end('NODE IS RUNNING');
});

// Set up our routes
// app.use("/api", router);

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}