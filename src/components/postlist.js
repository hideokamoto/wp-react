var React = require("react");
var Router = require('react-router');
var Link = Router.Link;

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
      }.bind(this),
      error: function(data){
        console.error(this.props.url, status, data.toString());
      }.bind(this)
    });
  },
});


module.exports = PostTitle;
module.exports = PostList;
