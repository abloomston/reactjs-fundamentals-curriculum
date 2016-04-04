import React from 'react';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

var Main = props => (
	<div>
		<div id="app-top">
			<h2>Weather Web App</h2>
			<GetWeatherContainer/>
		</div>
		<div id="app-main">
			{props.children}
		</div>
	</div>
);

module.exports = Main;
