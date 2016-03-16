var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var history = ReactRouter.hashHistory;

var Routes = props => (
	<Router history={history}>
	</Router>
);

ReactDOM.render(<Routes/>, document.getElementById('app'));
