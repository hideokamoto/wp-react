var React = require("react");
var Addons = require('react/addons');

var Wppost = React.createClass({
  mixins: [Addons.addons.LinkedStateMixin],
  getInitialState: function() {
    var default_url = "http://wp-kyoto.net/";
    var default_num = 10;
    return {
      url: default_url,
      num: default_num
    };
  },
  render: function(){
    var data = this.state.postData;
    return (
      <div className="row">
        <h2>WP-APIテスター</h2>
        <p>
          URLを入力して「Submit」をクリックすると、WP-APIの情報を取得します。<br/>
          selectボックスの値を変更すると、記事の絞込が可能です。
        </p>
        <form className="section" onSubmit={this.submitHandler}>
          <label>
            URL(入力できません)
            <input name="url" type="url" value={this.state.url} disabled/>
          </label>
          <label>
            記事件数
            <input name="num" type="num" valueLink={this.linkState('num')} />
          </label>
          <button className="btn-large waves-effect waves-light" type="submit" name="action">
            Submit
          </button>
        </form>
        <PostList param={this.state}/>
      </div>
    );
  },
  submitHandler: function(event){
    event.preventDefault();
    console.log(this.state.num);
    var num = this.state.num;
    this.setState({
        num: num
    });
  },
});
module.exports = Wppost;

var PostList = React.createClass({
  getInitialState: function() {
    return {
      postData: []
    };
  },
  render: function(){
    var posts = this.state.postData.map(function(data){
      return (
        <li key={data.ID}>{data.title}</li>
      )
    });
    return (
      <ul>
        {posts}
      </ul>
    );
  },
  componentWillReceiveProps: function(nextProps){
    console.log(this.props);
    this.ajaxRequest(this.props.param);
  },
  componentDidMount: function() {
    this.ajaxRequest(this.props.param);
  },
  ajaxRequest: function(param){
    var url = param.url + "wp-json/posts?";
    if (param.num){ url += "filter[posts_per_page]=" + param.num + "&";}
    url += "&_jsonp=?";
    $.ajax({
      url: url,
      dataType: 'jsonp',
      callback: 'callback',
      success: function(data){
        console.log(data);
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
