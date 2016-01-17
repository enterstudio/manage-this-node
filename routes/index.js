var express = require('express');
var _       = require('lodash');

var router = express.Router();

/*
 * get index
 */
router.get('/', function(req, res, next) {

  var enabledServices = _.filter(res.app.locals.services, function(item) {
    return (item.url !== undefined && item.url !== '');
  });

  res.render('index', {
    title: res.app.locals.title,
    services: enabledServices
  });
});

module.exports = router;
