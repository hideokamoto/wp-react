var React = require("react");
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Media = React.createClass({
  render: function(){
    return (
      <div id="media">
        <RouteHandler/>
      </div>
    )
  }
});
module.exports =  Media;
