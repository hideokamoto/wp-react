var React = require("react");
var Router = require('react-router');
var Link = Router.Link;

var GalleryCont = React.createClass({
  getInitialState: function(){
    return {
    postData: this.props.data
  }
  },
  render: function(){
    var data = this.state.postData;
    var params = {
      mediaId: 'media/' + data.ID
    };
    return (
      <section id={data.ID}>
          <img src={data.guid} />
          <p>{data.title}</p>
        <hr />
      </section>
    );
  }
});


var Gallery = React.createClass({
  getInitialState: function() {
    return {
      postData: [],
      url: "http://wp-kyoto.net/"
    };
  },
  render: function(){
    var medias = this.state.postData.map(function(data){
      return (
        <GalleryCont data={data}/>
      )
    });
    return (
      <div id="postlist" className="container">
        {medias}
      </div>
    );
  },
  componentDidMount: function() {
    this.ajaxRequest(this.state.url);
  },
  ajaxRequest: function(url){
    var url = url + "wp-json/media?";
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


module.exports = GalleryCont;
module.exports = Gallery;
