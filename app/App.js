import React, {Component} from 'react';
import {render} from 'react-dom';
import { hashHistory, Router, Route, Link } from 'react-router'
import Wrapper from './wrapper.js';
import Home from './home.js';
import Users from './users.js';


class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route component={Wrapper}>
          <Route path="users" component={Users} />
        </Route>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
