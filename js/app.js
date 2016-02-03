//
(function(){
  console.log('The Address : 4.0.0');
  var React = require('react');
  var ReactDOM = require('react-dom');
  //
  var AppControllerView = require('./components/appControllerView');
  var SeeAllControllerView = require('./components/controllerViewSeeAll');
  var AddNewControllerView = require('./components/controllerViewAddNew');
  //
  var App = ReactDOM.render(<AppControllerView />,document.getElementById('react-app'));
})();
