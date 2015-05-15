var React = require("react");
var NotFound = React.createClass({
    render: function(){
      return (
        <div className="404 container">
          <h2>Oops!</h2>
          <p>Your request page is not founded.</p>
        </div>
      );
    }
});
module.exports =  NotFound;
