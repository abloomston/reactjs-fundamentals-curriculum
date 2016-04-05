import React from 'react';
import {Grid, Nav, Navbar, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

import styles from '../styles/Main.css';

var Main = props => (
  <div className={styles.root}>
    <Navbar fluid>
      <Navbar.Header>
			  <IndexLinkContainer to="/"><Navbar.Brand>My Weather App</Navbar.Brand></IndexLinkContainer>
      </Navbar.Header>
      <Navbar.Form pullRight>
			  <GetWeatherContainer/>
      </Navbar.Form>
    </Navbar>
    <Grid fluid className={styles.main}>
		  {props.children}
    </Grid>
	</div>
);

module.exports = Main;
