var express = require('express');
var _       = require('lodash');

var router = express.Router();

/*
 * get config index
 */
router.get('/', function(req, res, next) {
  res.render('config', {
    title: res.app.locals.title + ' configuration',
    settings: {
      title: res.app.locals.title,
      port: res.app.locals.port,
      urlBase: res.app.locals.urlBase,
      services: res.app.locals.services
    }
  });
});

/*
 * post config
 */
router.post('/', function(req, res) {

});

module.exports = router;
