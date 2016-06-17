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

		learning.title = req.body.title;
		learning.reads = 0;
		learning.image = 'http://localhost:8080/image/universe.jpg';
		learning.save(function(err) {
			if (err)
				res.send(err);
			res.json({ status: 200, message: 'Learning created successfully!' });
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
			learning.schedule = req.body.learning.schedule;
			learning.save(function(err) {
				if (err)
					res.send(err);
				res.json({ status: 200, message: 'Learning successfully updated!' });
			});
		});
	})
	.delete(function(req, res) {
		Learning.remove({
			_id: req.params.learning_id
		}, function(err, learning) {
			if (err)
				res.send(err);
			res.json({ status: 200, message: 'Successfully deleted learning!'});
		});
	});

module.exports = router;