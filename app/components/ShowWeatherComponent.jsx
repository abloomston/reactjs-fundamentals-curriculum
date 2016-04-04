import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

var Loading = props => (
  <h1>Loading</h1>
);

var WeatherDataDay = props => (
  <div>
    <h2>{props.data.dt}</h2>
    {props.data.weather[0].icon}<br/>
    {props.data.weather[0].description}<br/>
  </div>
);

var WeatherData = props => (
  <div>
    <h1>{props.cityState}</h1>
    <Grid fluid>
      <Row>
        {props.weatherData.list.map(data =>
          <Col sm={6} md={4} key={data.dt}><WeatherDataDay data={data}/></Col>
         )}
      </Row>
    </Grid>
  </div>
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
