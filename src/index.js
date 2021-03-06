
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import {Provider} from 'react-redux';

import './index.css';

import store from './store';


// import registerServiceWorker from './registerServiceWorker';


import Master from './components/master';
import Home from './components/home';
import About from './components/about';
import Create from './components/create';
import ViewProjects from './components/view';
import LogIn from './components/login';
import SignUp from './components/signup';
import Profile from './components/profile';
import currentAdventure from './components/currentAdventure'

const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Master} >
          <IndexRoute component={Home} />
          <Route path="/adventure" component={ViewProjects} /> 
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/create" component={Create} />
          <Route path="/view" component={ViewProjects} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />  
          <Route path="/profile" component={Profile} /> 
          <Route path="/view/:projectTitle" component={currentAdventure} /> 
         
       </Route>           
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
// ReactDOM.render(routes, document.getElementById('app'))

ReactDOM.render(
    <Provider store={store}>
       {routes}
    </Provider>,
    document.getElementById('app'))
);
