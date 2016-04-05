import React from 'react';
import {Grid} from 'react-bootstrap';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

import styles from '../styles/Home.css';

var Home = props => (
	<Grid fluid className={styles.root}>
		<h1 className={styles.header}>Enter a City and State</h1>
		<GetWeatherContainer/>
	</Grid>
);

module.exports = Home;
