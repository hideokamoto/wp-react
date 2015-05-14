var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var NotFoundRoute = Router.NotFoundRoute;


var Dashboard = React.createClass({
  render: function(){
    return(
      <div>Dashboard</div>
    );
  }
});


var NotFound = React.createClass({
    render: function(){
      return (
        <div className="hode">not</div>
      );
    }
});

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
      <div>
        <header>
          <ul>
            <li><Link to="app">Dashboard</Link></li>
            <li><Link to="inbox">Inbox</Link></li>
            <li><Link to="calendar">Calendar</Link></li>
          </ul>
        </header>
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
