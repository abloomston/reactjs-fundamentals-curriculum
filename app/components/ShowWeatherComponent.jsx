var React = require('react');

var PropTypes = React.PropTypes;

var ShowWeatherComponent = props => (
  <div>
    <h2>{props.cityState}</h2>
  </div>
);

ShowWeatherComponent.propTypes = {
  cityState: PropTypes.string.isRequired
};

module.exports = ShowWeatherComponent;
