//
var React = require('react');
var Link = require('react-router').Link;
var AppControllerView = React.createClass({
  render: function(){
    //
    return (
      <div>
        <h2>The Required.</h2>
        <ul>
          <li> <Link to='/see'> See All </Link> </li>
          <li> <Link to='/add'> Add New </Link> </li>
        </ul>
        {
          //renders the children
          this.props.children
        }
      </div>
    );
  }
});
module.exports = AppControllerView;
