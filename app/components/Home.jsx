import React from 'react';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

var Home = props => (
	<div>
		<h3>Enter a City and State</h3>
		<GetWeatherContainer/>
	</div>
);

module.exports = Home;
