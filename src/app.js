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

var MainPage = React.createClass({
  render: function(){
    return <div>page</div>;
  }
});

var PostTitle = React.createClass({
  getInitialState: function(){
    return {
    postData: this.props.data
  }
  },
  render: function(){
    var data = this.state.postData;
    var params = {
      postId: 'post/' + data.ID
    };
    return (
      <section id={data.ID}>
        <Link to="post" params={params}>
          <h3>{data.title}</h3>
          <p>{data.author.name}</p>
        </Link>
        <hr />
      </section>
    );
  }
});

var PostList = React.createClass({
  getInitialState: function() {
    return {
      postData: [],
      url: "http://wp-kyoto.net/"
    };
  },
  render: function(){
    var posts = this.state.postData.map(function(data){
      return (
        <PostTitle data={data}/>
      )
    });
    return (
      <div id="postlist" className="container">
        {posts}
      </div>
    );
  },
  componentDidMount: function() {
    this.ajaxRequest(this.state.url);
  },
  ajaxRequest: function(url){
    var url = url + "wp-json/posts?";
    url += "&_jsonp=?";
    $.ajax({
      url: url,
      dataType: 'jsonp',
      callback: 'callback',
      success: function(data){
        this.setState({postData:data});
        console.log(data);
      }.bind(this),
      error: function(data){
        console.error(this.props.url, status, data.toString());
      }.bind(this)
    });
  },
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="inbox" handler={Inbox} />
    <DefaultRoute handler={Dashboard} />
    <NotFoundRoute handler={NotFound}/>
    <Route name="post" path="/:postId" handler={Post}>
      <Route name="top" handler={MainPage} />
      <DefaultRoute handler={PostList} />
    </Route>
  </Route>
);

Router.run(routes, function(Handler){
  React.render(<Handler />, document.body);
});
