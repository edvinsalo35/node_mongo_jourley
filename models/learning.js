var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var learningSchema = new Schema({
	title: String,
	udid: String,
	reads: Number,
	image: String,
	schedule: { type: Number, default: 0 },
});

module.exports = mongoose.model('Learning', learningSchema);