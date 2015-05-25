var React = require("react");
var Addons = require('react/addons');

var Wproot = React.createClass({
  mixins: [Addons.addons.LinkedStateMixin],
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
        <h1>WP-APIテスター</h1>
        <p>
          URLを入力して「Submit」をクリックすると、WP-APIの情報を取得します。<br/>
          そのうちpostやmedia、filterクエリにも対応予定。
        </p>
        <form className="section" onSubmit={this.submitHandler}>
          <input name="url" type="url" valueLink={this.linkState('url')} />
          <button className="btn-large waves-effect waves-light" type="submit" name="action">
            Submit
          </button>
        </form>
        <dl>
          <dt>表示中のサイト</dt><dd><a href={data.URL}>{data.name}</a></dd>
          <dt>サイトの説明</dt><dd>{data.description}</dd>
          <dt>WP-APIについて</dt><dd><a href={data.meta.links.help}>GitHub(WP-API)</a></dd>
        </dl>
      </div>
    );
  },
  submitHandler: function(event){
    event.preventDefault();
    this.setState({
        url: this.state.url
    });
    this.ajaxRequest(this.state.url);
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
        console.log(data);
        var errorMsg = data.status + data.statusText;
        alert(errorMsg);
      }.bind(this)
    });
  },
});


module.exports = Wproot;
