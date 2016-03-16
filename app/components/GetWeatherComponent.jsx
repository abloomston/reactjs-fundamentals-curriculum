var React = require('react');

var PropTypes = React.PropTypes;

var GetWeatherComponent = props => (
	<form onSubmit={props.onSubmitLocation}>
		<div className="form-group">
			<input className="form-control" placeholder={props.placeholder || ""} type="text" onChange={props.onUpdateLocation} value={props.location}/>
		</div>
		<div className="form-group">
			<button className="btn btn-block btn-success" type="submit">Continue</button>
		</div>
	</form>
);

GetWeatherComponent.propTypes = {
  placeholder: PropTypes.string,
	location: PropTypes.string.isRequired,
	onSubmitLocation: PropTypes.func.isRequired,
	onUpdateLocation: PropTypes.func.isRequired
};

module.exports = GetWeatherComponent;
