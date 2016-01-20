import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="ui search">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="socialprintstudio..." />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="results"></div>
        <h1 className="sitename">Searchagrahm</h1>
      </div>
    );
  }
}
