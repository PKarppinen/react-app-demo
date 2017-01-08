/*=== Human Model ===*/

var mongoose = require('mongoose');

var HumanModel = function() {

	var HumanSchema = mongoose.Schema({
		firstName : String, lastName : String
	});

	return mongoose.model('Human', HumanSchema);
}

module.exports = HumanModel;
