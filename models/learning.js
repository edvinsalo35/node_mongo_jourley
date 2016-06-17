var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var learningSchema = new Schema({
	title: String,
	reads: Number,
	image: String,
});

module.exports = mongoose.model('Learning', learningSchema);