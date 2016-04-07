import React from 'react';
import NavBar from '../components/NavBar.jsx';

import styles from '../styles/Main.css';

var Main = props => (
  <div className={styles.root}>
    <div className={styles.nav}>
      <NavBar/>
    </div>
    <div className={styles.main}>
		  {props.children}
    </div>
	</div>
);

module.exports = Main;
