import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <h3 className="site-header-heading">Searchagrahm</h3>
        <div className="ui search site-header-center">
          <div className="ui icon input">
            <input className="prompt" type="text" placeholder="socialprintstudio..." />
            <i className="search icon"></i>
          </div>
        </div>
      </header>
    );
  }
}