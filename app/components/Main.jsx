import React from 'react';
import {Grid, Nav, Navbar} from 'react-bootstrap';
import bUtils from 'react-bootstrap/lib/utils/bootstrapUtils'
import {IndexLinkContainer} from 'react-router-bootstrap';

import GetWeatherContainer from '../containers/GetWeatherContainer.jsx';

import styles from '../styles/Main.css';

bUtils.addStyle(Navbar, ['E5991CBDFC0C']); /* Override navbar-default with navbar-E5991CBDFC0C, a bogus class */
/* TODO find a better way to handle locally scoped styling override for navbar */

var Main = props => (
  <div className={styles.root}>
    <Navbar staticTop fluid bsStyle='E5991CBDFC0C' className={styles.nav}>
      <Navbar.Header>
			  <IndexLinkContainer to="/"><Navbar.Brand>My Weather App</Navbar.Brand></IndexLinkContainer>
      </Navbar.Header>
      <Navbar.Form pullRight>
			  <GetWeatherContainer/>
      </Navbar.Form>
    </Navbar>
    <div className={styles.main}>
		  {props.children}
    </div>
	</div>
);

module.exports = Main;
