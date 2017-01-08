/*=== Human CRUD Routes ===*/
var HumansCtrl = require("../controllers/HumansCtrl");

var HumansRoutes = function(app) {

	app.post("/humans", function(req, res) {
		HumansCtrl.create(req, res);
	});

	app.get("/humans", function(req, res) {
		HumansCtrl.fetchAll(req, res);
	});

	app.get("/humans/:id", function(req, res) { //try findById
		HumansCtrl.fetch(req, res);
	});

	app.put("/humans/:id", function(req, res) {
		HumansCtrl.update(req, res);
	});

	app.delete("/humans/:id", function(req, res) {
		HumansCtrl.delete(req, res);
	});

}

module.exports = HumansRoutes;