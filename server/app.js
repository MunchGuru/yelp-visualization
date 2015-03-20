var express = require('express');

// Middleware
var morgan = require('morgan');
var parser = require('body-parser');

// Router
var router = require('./routers.js');

var app = express();
module.exports.app = app;

var port = process.env.PORT || 4568;

// Set what we are listening on.
app.set('port', port);

// 2 for dev, 0 for production
app.set('json spaces', 2);

// parse application/x-www-form-urlencoded
app.use(parser.urlencoded({ extended: false }));

// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

app.use(express.static(__dirname + '/../client'));

// Set up our routes
app.use('/api', router);

module.exports = app;
