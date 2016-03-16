var React = require('react');

var ShowWeatherComponent = require('../components/ShowWeatherComponent.jsx');

var ShowWeatherContainer = React.createClass({
	render: function() {
		return (
			<ShowWeatherComponent
              cityState={this.props.routeParams.cityState}
      />
		);
	}
});

module.exports = ShowWeatherContainer;
