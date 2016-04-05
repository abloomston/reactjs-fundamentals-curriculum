import React from 'react';
import NavBar from '../components/NavBar.jsx';

import styles from '../styles/Main.css';

var Main = props => (
  <div className={styles.root}>
    <NavBar/>
		{props.children}
	</div>
);

module.exports = Main;
