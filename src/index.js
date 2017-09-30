
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import './index.css';

// import registerServiceWorker from './registerServiceWorker';


import Master from './components/master';
import Home from './components/home';
import About from './components/about';
import Create from './components/create';
import ViewProjects from './components/view';
import LogIn from './components/login';
import SignUp from './components/signup';



const routes = (
    <Router history={hashHistory}>
      <Route path="/" component={Master} />
          <getIndexRoute component={Home} />
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/create" component={Create} />
          <Route path="/view" component={ViewProjects} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />          
    </Router>
);

document.addEventListener('DOMContentLoaded', () =>
ReactDOM.render(routes, document.getElementById('app'))
);

// ReactDOM.render(routes, document.getElementById('app'));
// registerServiceWorker();




// const routes = (
//     <Router history={hashHistory}>
//         <Route path="/emails" component={App}>
//             <IndexRoute component={EmailListContainer} />
//             <Route path=":emailId" component={EmailContainer} />
//         </Route>
//     </Router>
// );