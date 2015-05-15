var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;

var Dashboard = require('../src/components/dashboard.js');
var NotFound  = require('../src/components/notfound.js');
var Header    = require('../src/components/header.js');

var Inbox = React.createClass({
  render: function(){
    return(
      <div>Inbox</div>
    );
  }
});

var Calendar = React.createClass({
  render: function(){
    return(
      <div>Calander:-)</div>
    );
  }
});

var App = React.createClass({
  render: function(){
    return(
      <div id="container">
        <Header/>
        <RouteHandler/>
      </div>
    )
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox} />
    <Route name="calendar" handler={Calendar} />
    <DefaultRoute handler={Dashboard} />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

Router.run(routes, function(Handler){
  React.render(<Handler />, document.body);
});
