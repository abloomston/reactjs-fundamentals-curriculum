var React = require('react');

var ShowWeatherComponent = require('../components/ShowWeatherComponent.jsx');
var weatherHelpers = require('../utils/weatherHelpers.jsx');

var ShowWeatherContainer = React.createClass({

  getInitialState: function() {
    return {
      isLoading: true,
      weatherData: {}
    };
  },

  componentDidMount: function() {
    this.loadNewWeather(this.props.routeParams.cityState);
  },

  componentWillReceiveProps: function(nextProps) {
    if (nextProps.routeParams.cityState != this.props.routeParams.cityState) {
      this.loadNewWeather(nextProps.routeParams.cityState);
    }
  },

  loadNewWeather: function(cityState) {
    this.setState({
      isLoading: true,
      weatherData: {}
    });
    weatherHelpers.getWeatherData(cityState)
                  .then(function (weatherData) {
                    this.setState({
                      isLoading: false,
                      weatherData: weatherData
                    });
                  }.bind(this));
  },

	render: function() {
		return (
			<ShowWeatherComponent
              cityState={this.props.routeParams.cityState}
              isLoading={this.state.isLoading}
              weatherData={this.state.weatherData}
      />
		);
	}
});

module.exports = ShowWeatherContainer;
