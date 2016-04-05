import React from 'react';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

import styles from '../styles/Home.css';

var Home = props => (
	<div className={styles.root}>
		<h3>Enter a City and State</h3>
		<GetWeatherContainer/>
	</div>
);

module.exports = Home;
