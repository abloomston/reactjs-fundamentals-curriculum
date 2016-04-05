import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

import styles from '../styles/Home.css';

/* TODO cleaner horizontal centering */
/* TODO vertical centering, cf http://stackoverflow.com/questions/22196587/how-to-center-align-vertically-the-container-in-bootstrap */

var Home = props => (
	<Grid fluid className={styles.root}>
    <Row>
      <Col xs={12}>
		    <h1 className={styles.header}>Enter a City and State</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={8} xsOffset={2} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
		    <GetWeatherContainer/>
      </Col>
    </Row>
	</Grid>
);

module.exports = Home;
