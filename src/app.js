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
var PostList  = require('../src/components/postlist.js');
var PostContent = require('../src/components/postcont.js');

var Gallery = React.createClass({
  render: function(){
    return(
      <div>Gallery</div>
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

var Post = React.createClass({
  render: function(){
    return (
      <div id="post">
        <RouteHandler/>
      </div>
    )
  }
});


var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="gallery" handler={Gallery} />
    <DefaultRoute handler={Dashboard} />
    <NotFoundRoute handler={NotFound}/>
    <Route name="post" path="/:postId" handler={Post}>
      <DefaultRoute handler={PostList} />
      <NotFoundRoute handler={PostContent} />
    </Route>
  </Route>
);

Router.run(routes, function(Handler){
  React.render(<Handler />, document.body);
});
