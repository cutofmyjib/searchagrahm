import React, {Component} from 'react';
import {render} from 'react-dom';
import { hashHistory, Link } from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderResults(event) {
    if (event.keyCode === 13) {
      hashHistory.push('/users?username=' + this.state.username)
    }
  }

  captureString(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <header className="site-header">
        <h2 className="site-header-heading"><Link to="/" className="site-header-heading-link">Searchagrahm</Link></h2>
        <div className="ui search site-header-center">
          <div className="ui icon input">
            <input className="prompt" type="text" onKeyDown={this.renderResults.bind(this)} onChange={this.captureString.bind(this)} placeholder="socialprintstudio..." />
            <i className="search icon"></i>
          </div>
        </div>
      </header>
    );
  }
}