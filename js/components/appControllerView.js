//
var React = require('react');
var Link = require('react-router').Link;
var AppControllerView = React.createClass({
  render: function(){
    //
    return (
      <div className="row">
        <nav className="u-full-width">
          <h2>The Required.</h2>
          <ul id="navlist">
            <li><Link to='/see' className="button"> See All </Link></li>
            <li><Link to='/add' className="button"> Add New </Link></li>
          </ul>
        </nav>
        {
          //renders the children
          this.props.children
        }
      </div>
    );
  }
});
module.exports = AppControllerView;
