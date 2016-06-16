var express = require('express');

var router = express.Router();
var Learning = require('./models/learning');

router.get('/', function(req, res) {
	res.json({ message: 'Welcome to the REST API' });
});

router.route('/learnings')
	.get(function(req, res) {
		Learning.find(function(err, learnings) {
			if (err)
				res.send(err);
			res.json(learnings);
		});
	});

module.exports = router;