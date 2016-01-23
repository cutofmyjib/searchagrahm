import React, {Component} from 'react';
import {render} from 'react-dom';
import { hashHistory, Router, Route, Link } from 'react-router'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  redirectSearch(event) {
    var queryString = event.target.value;
    queryString = queryString.replace(/\s/g, '');
    if (event.keyCode === 13 && queryString) {
      hashHistory.push('/users?username=' + queryString)
    }
  }

  render() {
    return (
      <div className="home">
        <div className="ui search">
          <div className="ui icon input">
            <input className="prompt" type="text" onKeyDown={this.redirectSearch.bind(this)} placeholder="socialprintstudio..." />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="results"></div>
        <h1 className="sitename">Searchagrahm</h1>
      </div>
    );
  }
}
