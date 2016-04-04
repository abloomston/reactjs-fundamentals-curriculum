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
    weatherHelpers.getWeatherData(this.props.routeParams.cityState)
      .then(function (weatherData) {
        this.setState({
          isLoading: false,
          weatherData: weatherData
        });
      }.bind(this));
  },

  /* TODO- entering new city, state second time doesn't trigger refresh of data here.. */

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
