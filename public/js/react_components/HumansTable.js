/** @jsx React.DOM */

/*
	var HumansTable = require('../react_components/HumansTable'); 
	React.renderComponent(
		<HumansTable pollInterval={500}/>,
		document.querySelector('HumansTable')
	);
*/

var React = require('react')
	, Backbone = require("backbone")
	, HumanModel = require("../modules/models/HumanModel")
	, HumansCollection = require("../modules/models/HumansCollection");

var HumansTable = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
	},

	render: function() {

		var humansRows = this.state.data.map(function(human){
			var deleteLink = "#delete_human/" + human._id;

			return (
				<tr>
					<td>{human.firstName}</td>
					<td>{human.lastName}</td>
					
					<td><a href={deleteLink}>delete{" "}{human._id}</a></td>
				</tr>
			);
		});

		return (
			<div className="table-responsive">
				<strong>{this.state.message}</strong>
				<table className="table table-striped table-bordered table-hover" >
					<thead>
						<tr>
							<th>firstName</th><th>lastName</th>
							<th>_id</th>
						</tr>
					</thead>
					<tbody>
						{humansRows}
					</tbody>
				</table>
			</div>
		);
	},	

	getHumans : function() {

		var humans = new HumansCollection();

		humans.fetch()
			.done(function(data){
				this.setState({data : humans.toJSON(), message : Date()});
			}.bind(this))
			.fail(function(err){
				this.setState({
					message  : err.responseText + " " + err.statusText
				});
			}.bind(this))
	},
	
	componentWillMount: function() {
		this.getHumans();
		setInterval(this.getHumans, this.props.pollInterval);
	},

	componentDidMount: function() {
		var Router = Backbone.Router.extend({
			routes : {
				"delete_human/:id" : "deleteHuman"
			},
			initialize : function() {
				console.log("Initialize router of HumansTable component");
			},
			deleteHuman : function(id){
				console.log("=== delete human ===", id);
				new HumanModel({_id:id}).destroy();
				this.navigate('/');
			}
		});
		this.router = new Router()
	}

});

module.exports = HumansTable;
