var express      = require('express');
var favicon      = require('serve-favicon');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var _            = require('lodash');
var fs           = require('fs-extra');

var config = require(__dirname + '/lib/config');

var app = express();
app.set('config', config);
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
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

  enabledServices = _.sortBy(enabledServices, '_sort');

  var allServices = _.sortBy(res.app.locals.services, '_sort');

  res.render('index', {
    title: res.app.locals.title,
    services: enabledServices,
    allServices: allServices
  });
});

/*
 * POST settings
 */
app.post('/', function(req, res) {

  //console.log(JSON.stringify(req.body));

  //_.forEach(req.body.services, function(val, key) {
  //  console.log(key, val);
  //});

  // update for session
  res.app.locals.title    = req.body.title || 'Awesome place!';
  res.app.locals.port     = req.body.port || 3000;
  res.app.locals.services = req.body.services;

  // @TODO update config
  // write file with the follow  contents
  // JSON.stringify(object, null, 2)

  // redirect to home
  res.redirect('/');

});

module.exports = app;
