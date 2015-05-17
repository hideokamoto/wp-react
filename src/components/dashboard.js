var React = require("react");


var Dashboard = React.createClass({
  getInitialState: function() {
    return {
      postData: {
        name: 'loading',
        meta: {
            links: {
              help: ''
            }
        }
      },
      url: "http://wp-kyoto.net/"
    };
  },
  render: function(){
    var data = this.state.postData;
    return (
      <div className="container">
        <h1>ReactでWP-APIのデータを表示させるテストページ</h1>
        <dl>
          <dt>表示中のサイト</dt><dd><a href={data.URL}>{data.name}</a></dd>
          <dt>サイトの説明</dt><dd>{data.description}</dd>
          <dt>WP-APIについて</dt><dd><a href={data.meta.links.help}>GitHub(WP-API)</a></dd>
        </dl>
      </div>
    );
  },
  componentDidMount: function() {
    this.ajaxRequest(this.state.url);
  },
  ajaxRequest: function(url){
    var url = url + "wp-json/?";
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


module.exports = Dashboard;
