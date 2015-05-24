var React = require("react");
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Wpapi = React.createClass({
  render: function(){
    return (
      <div id="post">
        <RouteHandler/>
      </div>
    )
  }
});
module.exports =  Wpapi;
