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
var Gallery     = require('../src/components/media/gallery.js');
var MediaContent= require('../src/components/media/mediacont.js');

//Get WP-API Tester
var Wpapi = require('../src/components/wpapi/wpapi.js');
var Wproot = require('../src/components/wpapi/wproot.js');

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
    <Route name="post" path="p/:postId" handler={Post}>
      <DefaultRoute handler={PostList} />
      <NotFoundRoute handler={PostContent} />
    </Route>
    <Route name="media" path="m/:mediaId" handler={Media}>
      <DefaultRoute handler={Gallery} />
      <NotFoundRoute handler={MediaContent} />
    </Route>
    <Route name="wpapi" path="wpapi/:apiId" handler={Wpapi}>
      <DefaultRoute handler={Wproot} />
    </Route>
  </Route>
);

Router.run(routes, function(Handler){
  React.render(<Handler />, document.body);
});
