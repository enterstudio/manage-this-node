var express = require('express');
var fs = require('fs-extra');
var _ = require('lodash');

var router = express.Router();

var configFile = __dirname + '/../config.json';
var configFileTemplate = configFile + '.template';

var config;

try {
  console.log('config file found %s', configFile);
  config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
} catch (err) {
  if (err.name === 'SyntaxError') {
    throw new Error('Invalid config file, please make sure the file is in JSON format.');
  }

  // config file not found
  if (err.code === 'ENOENT') {
    console.log('config file not found, copying from template');
    fs.copySync(configFileTemplate, configFile);
    config = JSON.parse(fs.readFileSync(configFile, 'utf8'));
  }
}

var enabledServices = _.filter(config, function(item) {
  return (item.url !== undefined && item.url !== "");
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: config.app.title || 'manage-this-node',
    services: enabledServices
  });
});

module.exports = { 
    router: router,
    port: config.app.port || 3000
};
