import React, {Component} from 'react';
import {render} from 'react-dom';
import {hashHistory} from 'react-router'

export default class Searchbox extends Component {
  searchUsers(event) {
    var queryString = event.target.value;
    queryString = queryString.replace(/\s/g, '');
    if (event.keyCode === 13 && queryString) {
      hashHistory.push('/users?username=' + queryString);
    }
  }

  render() {
    return (
      <input className="prompt" type="text" onKeyDown={this.searchUsers.bind(this)} placeholder="socialprintstudio..." />
    );
  }
}