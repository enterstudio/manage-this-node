var express      = require('express');
var path         = require('path');
var favicon      = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');

var config     = require(__dirname + '/lib/config');

var indexRoute  = require(__dirname + '/routes/index');
var configRoute = require(__dirname + '/routes/config');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(config.app.urlBase, express.static(path.join(__dirname, 'public')));

app.use(config.app.urlBase, indexRoute);
app.use(config.app.urlBase + '/config/', configRoute);

// set local variables
app.locals.title    = config.app.title;
app.locals.port     = config.app.port;
app.locals.urlBase  = config.app.urlBase;
app.locals.services = config.services;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// production error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
