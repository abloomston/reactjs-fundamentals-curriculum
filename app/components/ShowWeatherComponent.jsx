var React = require('react');

var PropTypes = React.PropTypes;

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
    <h3>{props.weatherData.city.name}, {props.weatherData.city.country}</h3>
    <ul>
      {props.weatherData.list.map(data => <li key={data.dt}><WeatherDataDay data={data}/></li>)}
    </ul>
  </div>
);

WeatherData.propTypes = {
  weatherData: PropTypes.object.isRequired
};

var ShowWeatherComponent = props => (
  <div>
    {(props.isLoading && <Loading/>) || <WeatherData weatherData={props.weatherData}/>}
  </div>
);

ShowWeatherComponent.propTypes = {
  cityState: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  weatherData: PropTypes.object.isRequired
};

module.exports = ShowWeatherComponent;
