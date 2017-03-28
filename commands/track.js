var request = require('request'),
	util 	= require('../util');

module.exports = function (param) {
	var	channel		= param.channel;
	var endpoint = param.commandConfig.endpoint;
  var user = param.user_id;

	request(endpoint, function (err, response, body) {
		var info = [];

		if (!err && response.statusCode === 200) {
			body = JSON.parse(body);
			logins = body.logins
		}
		else {
			info = err;
		}

		util.postMessage(channel, logins);
	});

};
