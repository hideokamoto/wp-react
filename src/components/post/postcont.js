var React = require("react");
var PostContent = React.createClass({
  getDefaultProps: function(){
    return {
      params: {
        postId: "post",
        splat: "/notfound"
      }
    }
  },
  getInitialState: function(){
    return {
      postData: [
        {
          title: "Loading...",
          content: ""
        }
      ],
      url: "http://wp-kyoto.net/wp-json/",
      hasPostFlag: true
    }
  },
  render: function(){
    if (this.state.hasPostFlag){
      var data = this.state.postData[0];
    } else {
      var data = {
        title:"404",
        content:"not found"
      };
    }
    return (
      <article className="container">
        <h2 className="post-title">{data.title}</h2>
        <div dangerouslySetInnerHTML={{__html: data.content}} className="content"></div>
      </article>
    );
  },
  componentDidMount: function() {
    this.ajaxRequest(this.state);
  },
  ajaxRequest: function(state){
    var pageAddress = this.props.params.splat.substr(1);
    var url = state.url + "posts?";
    url += "&filter[posts_per_page]=" + 1;
    if(isNaN(+pageAddress)){
      url += "&filter[name]=" + pageAddress;
    } else {
      url += "&filter[page_id]=" + pageAddress;
    }
    url += "&_jsonp=?";
    $.ajax({
      url: url,
      dataType: 'jsonp',
      callback: 'callback',
      success: function(data){
        if (data.length == 0){
          this.setState({hasPostFlag:false});
        } else {
          this.setState({postData:data});
        }
      }.bind(this),
      error: function(data){
        console.error(this.props.url, status, data.toString());
      }.bind(this)
    });
  },
});


module.exports = PostContent;
