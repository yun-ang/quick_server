'use strict';

var users = require('../models/Users');

exports.get_users = function(req, res) {
  users.list_of_users().then((results) => {
  	res.send(results)
  });
};
