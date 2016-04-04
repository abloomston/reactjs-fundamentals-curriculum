import React from 'react';

var Loading = props => (
  <p>Loading</p>
);

var WeatherDataDay = props => (
  <div>
    {props.data.dt}<br/>
    {props.data.weather.map(weather =>
      <div key={weather.id}>
        {weather.main}<br/>
        {weather.description}<br/>
      </div>
     )}
  </div>
);

var WeatherData = props => (
  <div>
    <h3>{props.cityState}</h3>
    <ul>
      {props.weatherData.list.map(data => <li key={data.dt}><WeatherDataDay data={data}/></li>)}
    </ul>
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
