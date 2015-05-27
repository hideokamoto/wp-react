var React = require("react");
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;
var Wpapi = React.createClass({
  render: function(){
    return (
      <div id="wpi" className="container">
        <div className="row">
          <div className="col s12">
            <h1>WP-APIテスター</h1>
            <ul className="tabs">
              <li className="tab col s6">
                <Link to="wpapi" params={{apiId: 'wpapi'}}>Root</Link>
              </li>
              <li className="tab col s6">
                <Link to="wpapi" params={{apiId: 'wpapi/post-api'}}>Post</Link>
              </li>
              <li className="tab col s3 hidden">
                <Link to="wpapi" params={{apiId: 'wpapi/media'}}>Media</Link>
              </li>
              <li className="tab col s3 hidden">
                <Link to="wpapi" params={{apiId: 'wpapi/page'}}>Page</Link>
              </li>
            </ul>
          </div>
        </div>
        <RouteHandler/>
      </div>
    )
  }
});
module.exports =  Wpapi;
