import React from 'react';
import {Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

var Main = props => (
	<div>
    <Navbar fluid>
      <Navbar.Header>
			  <IndexLinkContainer to="/"><Navbar.Brand>My Weather App</Navbar.Brand></IndexLinkContainer>
      </Navbar.Header>
      <Navbar.Form pullRight>
			  <GetWeatherContainer/>
      </Navbar.Form>
    </Navbar>
		{props.children}
	</div>
);

module.exports = Main;
