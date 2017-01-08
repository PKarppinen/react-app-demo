/*=== Human Controller ===*/

var Human = require("../models/Human")();

var HumansCtrl = {
	create : function(req, res) {
		var human = new Human(req.body)
			human.save(function (err, human) {
			res.send(human);
		});
	},
	fetchAll : function(req, res) {
		Human.find(function (err, humans) {
			res.send(humans);
		});
	},
	fetch : function(req, res) {
		Human.find({_id:req.params.id}, function (err, humans) {
			res.send(humans[0]);
		});
	},
	update : function(req, res) {
		delete req.body._id
		Human.update({_id:req.params.id}, req.body, function (err, human) {
			res.send(human);
		});
	},
	delete : function(req, res) {
		Human.findOneAndRemove({_id:req.params.id}, function (err, human) {
			res.send(human);
		});
	}
}

module.exports = HumansCtrl;
