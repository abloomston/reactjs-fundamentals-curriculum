import React from 'react';
import {Grid, Nav, Navbar} from 'react-bootstrap';
import bUtils from 'react-bootstrap/lib/utils/bootstrapUtils';
import {IndexLinkContainer} from 'react-router-bootstrap';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

import styles from '../styles/NavBar.css';

bUtils.addStyle(Navbar, ['E5991CBDFC0C']); /* Override navbar-default with navbar-E5991CBDFC0C, a bogus class */

/* TODO find a better way to handle locally scoped styling override for navbar. */
/* TODO find a better way to override margin-bottom for navbar than hack below */
/* TODO responsive sizing of navbar.form leads to input field in GetWeatherComponent filling up screen. This is an issue with this simple react-bootstrap example as well: http://react-bootstrap.github.io/components.html#navbars-form */

var NavBar = props => (
  <Navbar staticTop fluid bsStyle='E5991CBDFC0C' className={styles.root} style={{marginBottom: '0px'}}>
    <Navbar.Header>
			<IndexLinkContainer to="/"><Navbar.Brand>My Weather App</Navbar.Brand></IndexLinkContainer>
    </Navbar.Header>
    <Navbar.Form pullRight>
			<GetWeatherContainer/>
    </Navbar.Form>
  </Navbar>
);

module.exports = NavBar;
