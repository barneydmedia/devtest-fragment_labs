var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Developer Test - Fragment Labs',
    // articles: articles
  });
});

router.get('/clients', function (req, res, next) {
  db.Client.findAll().then(function(clients) {
    res.render('clients', {
      title: 'Client List',
      clients: clients,
    });
  });

});
