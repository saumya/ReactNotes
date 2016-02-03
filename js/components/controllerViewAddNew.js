//
var React = require('react');
var AddNew = React.createClass({
  render: function(){
    //
    return (
      <div class="twelve columns">
      	<label for="newAddress">Note</label>
  			<textarea className="u-full-width" placeholder="New note ..." id="newAddress"></textarea>
  			<input className="button-primary" type="button" value="Save"></input>
      </div>
    );
  }
});
module.exports = AddNew;
