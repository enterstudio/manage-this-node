var express      = require('express');
var favicon      = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var _            = require('lodash');

var config = require(__dirname + '/lib/config');

var app = express();
app.set('config', config);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

// set local variables
app.locals.title    = config.app.title;
app.locals.port     = config.app.port;
app.locals.services = config.services;

/*
 * GET index
 */
app.get('/', function(req, res, next) {

  var enabledServices = _.filter(res.app.locals.services, function(item) {
    return (item.url !== undefined && item.url !== '');
  });

  res.render('index.hbs', {
    title: res.app.locals.title,
    services: enabledServices
  });
});

/*
 * GET settings
 */
app.get('/settings', function(req, res, next) {
  res.render('settings', {
    title: res.app.locals.title + ' > settings'
  });
});

/*
 * POST settings
 */
app.post('/settings', function(req, res) {
  var nconf = require('nconf');
  
});

module.exports = app;
