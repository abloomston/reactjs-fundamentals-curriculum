import React from 'react';

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
  placeholder: React.PropTypes.string,
	location: React.PropTypes.string.isRequired,
	onSubmitLocation: React.PropTypes.func.isRequired,
	onUpdateLocation: React.PropTypes.func.isRequired
};

module.exports = GetWeatherComponent;
