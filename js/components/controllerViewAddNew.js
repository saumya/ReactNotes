//
var React = require('react');
var Lawnchair = require('../libs/Lawnchair')

var AddNew = React.createClass({
  render: function(){
    //console.log('AddNew : Lawnchair',Lawnchair);
    //
    return (
      <div className="twelve columns">
      	<label>Note</label>
  			<textarea className="u-full-width" placeholder="New note ..." id="newAddress"></textarea>
  			<input className="button-primary" type="button" value="Save"></input>
      </div>
    );
  }
});
module.exports = AddNew;
