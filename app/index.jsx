var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var history = ReactRouter.hashHistory;

var Main = require('./components/Main.jsx');
var Home = require('./components/Home.jsx');
var ShowWeatherContainer = require('./containers/ShowWeatherContainer.jsx');

var Routes = props => (
	<Router history={history}>
		<Route path='/' component={Main}>
		  <IndexRoute component={Home}/>
      <Route path='/weather/:cityState' component={ShowWeatherContainer}/>
		</Route>
	</Router>
);

ReactDOM.render(<Routes/>, document.getElementById('app'));
