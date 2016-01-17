var express = require('express');
var _ = require('lodash');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var enabledServices = _.filter(res.app.locals.services, function(item) {
    return (item.url !== undefined && item.url !== '');
  });

  res.render('index', {
    title: res.app.locals.title || 'manage-this-node',
    services: enabledServices
  });
});

module.exports = router;
