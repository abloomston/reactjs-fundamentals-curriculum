var React = require('react');

var GetWeatherContainer = require('../containers/GetWeatherContainer.jsx');

var Home = props => (
	<div>
		<h3>Enter a City and State</h3>
		<GetWeatherContainer/>
	</div>
);

module.exports = Home;
