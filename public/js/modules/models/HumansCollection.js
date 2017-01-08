var Backbone = require("backbone");
var HumanModel = require("./HumanModel");

var HumansCollection = Backbone.Collection.extend({
	url : "humans",
	model: HumanModel
});

module.exports = HumansCollection;

