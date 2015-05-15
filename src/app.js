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

//Post
var Post        = require('../src/components/post/post.js');
var PostList    = require('../src/components/post/postlist.js');
var PostContent = require('../src/components/post/postcont.js');

//Media
var Media       = require('../src/components/media/media.js');
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




var routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={Dashboard} />
    <NotFoundRoute handler={NotFound}/>
    <Route name="post" path="/:postId" handler={Post}>
      <DefaultRoute handler={PostList} />
      <NotFoundRoute handler={PostContent} />
    </Route>
    <Route name="media" path="/:mediaId" handler={Media}>
      <DefaultRoute handler={Gallery} />
      <NotFoundRoute handler={Gallery} />
    </Route>
  </Route>
);

Router.run(routes, function(Handler){
  React.render(<Handler />, document.body);
});
