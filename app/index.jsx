import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import ShowWeatherContainer from './containers/ShowWeatherContainer.jsx';

import './styles/index.jsx';

var Routes = props => (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
		  <IndexRoute component={Home}/>
      <Route path='/weather/:cityState' component={ShowWeatherContainer}/>
		</Route>
	</Router>
);

ReactDOM.render(<Routes/>, document.getElementById('app'));
