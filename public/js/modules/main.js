/** @jsx React.DOM */
var React   = require('react');
var Backbone = require("backbone");
Backbone.$ = window.$ = require("jquery")

var About = require('../react_components/About');

var HumanForm = require('../react_components/HumanForm');
var HumansTable = require('../react_components/HumansTable');

Backbone.history.start();

React.renderComponent(
  <HumansTable pollInterval={500}/>,
  document.querySelector('HumansTable')
);

React.renderComponent(
  <HumanForm/>,
  document.querySelector('HumanForm')
);
