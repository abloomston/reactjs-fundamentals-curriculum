import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

import styles from '../styles/Home.css';

var Home = props => (
	<Grid fluid className={styles.root}>
    <Row>
      <Col xs={12}>
		    <h1 className={styles.header}>Enter a City and State</h1>
      </Col>
    </Row>
    <Row>
      <Col xs={6} xsOffset={3} sm={6} smOffset={3} md={4} mdOffset={4} lg={2} lgOffset={5}>
		    <GetWeatherContainer/>
      </Col>
    </Row>
	</Grid>
);

module.exports = Home;
