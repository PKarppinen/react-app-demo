/** @jsx React.DOM */

/*
	var HumanForm = require('../react_components/HumanForm'); 
	React.renderComponent(
		<HumanForm/>,
		document.querySelector('HumanForm')
	);
*/

var React = require('react')
	, HumanModel = require("../modules/models/HumanModel");

var HumanForm = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
	},

	render: function() {
		return (
			<form role="form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
						<input className="form-control" type="text" placeholder="firstName" ref="firstName"/>
				</div>
				<div className="form-group">
						<input className="form-control" type="text" placeholder="lastName" ref="lastName"/>
				</div>
				
				<div className="form-group">
					<input className="btn btn-primary" type="submit" value="Add Human" />
				</div>
				<div className="form-group"><strong>{this.state.message}</strong></div>
			</form>
		);
	},

	componentDidMount: function() {},
	componentWillMount: function() {},
	handleSubmit : function() {
		var firstName = this.refs.firstName.getDOMNode().value.trim();
		var lastName = this.refs.lastName.getDOMNode().value.trim();
		
		if (!firstName) {return false;}
		if (!lastName) {return false;}
		
		var data = {};
		data.firstName = firstName;
		data.lastName = lastName;
		

		var human= new HumanModel(data);

		human.save()
			.done(function(data) {
				this.setState({
					message : human.get("_id") + " added!"
				});
				this.refs.firstName.getDOMNode().value = '';
				this.refs.lastName.getDOMNode().value = '';
				
				this.refs.firstName.getDOMNode().focus();
			}.bind(this))
			.fail(function(err) {
				this.setState({
					message  : err.responseText + " " + err.statusText
				});
			}.bind(this));

		return false;
	}

});

module.exports = HumanForm;
