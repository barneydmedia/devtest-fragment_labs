var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/api/v1/clients', router);
};

router.post('/', function (req, res, next) {
  // validate and store the gien client info
  var valid = true;
  var invalidFields = [];
  console.log(req.body);

  var first_name = req.body.first_name;
  var last_name = req.body.last_name;
  var phone_number = req.body.phone_number;
  var email = req.body.email;
    var email = email.replace('\D+', '');

  if (!first_name.match("^[A-Za-z ,.'-]+$")) {
    invalidFields.push(first_name);
    valid = false;
  }
  if (!last_name.match("^[A-Za-z ,.'-]+$")) {
    invalidFields.push(last_name);
    valid = false;
  }
  if (!phone_number.length >= 7) {
    invalidFields.push(phone_number);
    valid = false;
  }

  // TODO: fix this
  // if ( email.match(/^\S+@\S+\.\S+$/i) ) {
  //   invalidFields.push(email);
  //   valid = false;
  // }

  if (valid) {
    db.Client.create({
      first_name: first_name,
      last_name: last_name,
      phone_number: phone_number,
      email: email,
    }).then(function (result) {
      res.json(result);
    });
  } else {
    res.json({err: true, invalidFields: invalidFields});
  }

});
