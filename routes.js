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
	})
	.post(function(req, res) {
		var learning = new Learning();

		message.title = req.body.title;
		message.reads = 0;

		message.save(function(err) {
			if (err)
				res.send(err);
			res.json({ message: 'Learning created successfully!' });
		});
	});

router.route('/learnings/:learning_id')
	.get(function(req, res) {
		Learning.findById(req.params.learning_id, function(err, learning) {
			if (err)
				res.send(err);
			res.json(learning);
		});
	})
	.put(function(req, res) {
		Learning.findById(req.params.learning_id, function(err, learning) {
			if (err)
				res.send(err);
			learning.title = req.body.title;
			learning.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Learning successfully updated!' });
			});
		});
	})
	.delete(function(req, res) {
		Learning.remove({
			_id: req.params.learning_id
		}, function(err, learning) {
			if (err)
				res.send(err);
			res.json({ message: 'Successfully deleted learning!'});
		});
	});

module.exports = router;