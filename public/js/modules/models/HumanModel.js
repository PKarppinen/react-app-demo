var Backbone = require("backbone");

var HumanModel = Backbone.Model.extend({
	defaults : function (){
		return {
			
		}
	},
	urlRoot : "humans",
	idAttribute: "_id"
});

module.exports = HumanModel;