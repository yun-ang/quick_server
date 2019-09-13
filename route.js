'use strict';

var controller = require('./src/controllers/controller');

module.exports = function(app) {
	app.route('/users')
 		.get(controller.get_users);
};
