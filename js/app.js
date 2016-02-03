//
(function(){
  console.log('The Address : 4.0.0');
  var React = require('react');
  var ReactDOM = require('react-dom');
  //
  var Router = require('react-router').Router;
  var Route = require('react-router').Route;
  //var RouteHandler = Route.RouteHandler;
  //var Link = require('react-router').Link;
  var IndexRoute = require('react-router').IndexRoute;
  var hashHistory = require('react-router').hashHistory;
  //
  var AppControllerView = require('./components/appControllerView');
  var HomeControllerView = require('./components/controllerViewHome');
  var SeeAllControllerView = require('./components/controllerViewSeeAll');
  var AddNewControllerView = require('./components/controllerViewAddNew');
  //
  // Route declaration : type : 1
  var routes = (
                <Route path="/" component={AppControllerView}>
                  <IndexRoute component={HomeControllerView} />
                  <Route path="see" component={SeeAllControllerView} />
                  <Route path="add" component={AddNewControllerView} />
                </Route>
              );

  /*
  // Route declaration : type : 2
  var routes = {
    path: '/',
    component: App,
    childRoutes: [
      { path: 'one', component: One },
      { path: 'two', component: Two },
    ]
  }
  */
  var App = ReactDOM.render(<Router routes={routes} history={hashHistory} />,document.getElementById('react-app'));
})();
