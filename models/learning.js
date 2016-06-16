var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var learningSchema = new Schema({
	title: String,
	reads: Number
});

module.exports = mongoose.model('Learning', learningSchema);