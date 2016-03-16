var React = require('react');

var GetWeatherComponent = require('../components/GetWeatherComponent.jsx');

var GetWeatherContainer = React.createClass({

  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

	getInitialState: function() {
		return {
			cityState: ''
		};
	},

	handleUpdateLocation: function (event) {
		this.setState({
			cityState: event.target.value
		});
	},

	handleSubmitLocation: function (event) {
		event.preventDefault();
		const cityState = this.state.cityState;
		this.context.router.push(`/weather/${cityState}`);
	},

	render: function() {
		return (
			<GetWeatherComponent
              placeholder="New York, NY"
			        location={this.state.cityState}
				      onUpdateLocation={this.handleUpdateLocation}
              onSubmitLocation={this.handleSubmitLocation}
      />
		);
	}
});

module.exports = GetWeatherContainer;
