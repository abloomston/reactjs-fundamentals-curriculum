import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import moment from 'moment';

import styles from '../styles/ShowWeatherComponent.css';

var Loading = props => (
  <h1>Loading</h1>
);

var WeatherDataDay = props => (
  <div>
    <Image style={{height: '130px'}}
        alt={props.data.weather[0].description} src={require(`../images/weather-icons/${props.data.weather[0].icon}.svg`)}/>
    <h2>{moment.unix(props.data.dt).format('dddd, MMM D')}</h2>
  </div>
);

var WeatherData = props => (
  <Grid fluid className={styles.root}>
    <Row>
      <Col xs={12}>
        <h1>{props.cityState}</h1>
      </Col>
    </Row>
    <Row>
      {props.weatherData.list.map(data =>
        <Col sm={6} md={4} key={data.dt}><WeatherDataDay data={data}/></Col>
       )}
    </Row>
  </Grid>
);

WeatherData.propTypes = {
  weatherData: React.PropTypes.object.isRequired
};

var ShowWeatherComponent = props => (
  <div>
    {(props.isLoading && <Loading cityState={props.cityState}/>) || <WeatherData cityState={props.cityState} weatherData={props.weatherData}/>}
  </div>
);

ShowWeatherComponent.propTypes = {
  cityState: React.PropTypes.string.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  weatherData: React.PropTypes.object.isRequired
};

module.exports = ShowWeatherComponent;
