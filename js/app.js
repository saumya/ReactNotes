//
(function(){
  console.log('The Address : 4.0.0');
  var React = require('react');
  var ReactDOM = require('react-dom');
  var AppControllerView = require('./components/appControllerView');
  var App = ReactDOM.render(<AppControllerView />,document.getElementById('react-app'));
})();
