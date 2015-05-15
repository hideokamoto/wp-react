var React = require("react");
var Router = require('react-router');
var Link = Router.Link;
var Header = React.createClass({
  render: function(){
    return (
      <header>
        <nav className="nav-wrapper">
          <ul className="container">
            <li><Link to="app"><h1 className="site-title">React-router sample</h1></Link></li>
            <li><Link to="post" params={{postId: 'post'}}>Post</Link></li>
            <li><Link to="gallery">Gallery</Link></li>
          </ul>
        </nav>
      </header>

    );
  }
});
module.exports =  Header;
