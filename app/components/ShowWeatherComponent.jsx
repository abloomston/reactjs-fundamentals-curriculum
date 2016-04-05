import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import moment from 'moment';

import styles from '../styles/ShowWeatherComponent.css';

var ShowWeatherComponent = props => (
  <Grid fluid className={styles.root}>
    <Row>
      <Col xs={12}>
        <h1>{props.isLoading ? 'Loading' : props.cityState}</h1>
      </Col>
    </Row>
    <Row>
      {props.isLoading ? [] : props.weatherData.list.map(data =>
        <Col sm={6} md={4} key={data.dt}>
          <Image className={styles.weatherImage}
                 alt={data.weather[0].description}
                 src={require(`../images/weather-icons/${data.weather[0].icon}.svg`)}/>
          <h2>{moment.unix(data.dt).format('dddd, MMM D')}</h2>
        </Col>
       )}
    </Row>
  </Grid>
);

ShowWeatherComponent.propTypes = {
  cityState: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  weatherData: React.PropTypes.object.isRequired
};

module.exports = ShowWeatherComponent;
