import React from 'react';
import {Grid} from 'react-bootstrap';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

import styles from '../styles/Home.css';

var Home = props => (
	<Grid fluid className={styles.root}>
		<h3>Enter a City and State</h3>
		<GetWeatherContainer/>
	</Grid>
);

module.exports = Home;
