import React from 'react';
import {Grid, Row, Col, ButtonInput, Input} from 'react-bootstrap';

var GetWeatherComponent = props => (
	<form onSubmit={props.onSubmitLocation}>
		<Input type="text" placeholder={props.placeholder || ""} onChange={props.onUpdateLocation} value={props.location}
		  buttonAfter={<ButtonInput type="submit" bsStyle="success" value="Continue"/>}
    />
	</form>
);

GetWeatherComponent.propTypes = {
  placeholder: React.PropTypes.string,
	location: React.PropTypes.string.isRequired,
	onSubmitLocation: React.PropTypes.func.isRequired,
	onUpdateLocation: React.PropTypes.func.isRequired
};

module.exports = GetWeatherComponent;
