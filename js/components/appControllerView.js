//
var React = require('react');
var Link = require('react-router').Link;
var AppControllerView = React.createClass({
  render: function(){
    //
    return (
      <div>
        <h2>The Required.</h2>
        <nav className="navbar">
          <div className="container">
            <ul className="navbar-list">
              <li className="navbar-item"><Link to='/see' className="navbar-link"> See All </Link></li>
              <li className="navbar-item"><Link to='/add' className="navbar-link"> Add New </Link></li>
            </ul>
          </div>
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
