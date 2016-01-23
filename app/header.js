import React, {Component} from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router'

export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <h2 className="site-header-heading"><Link to="/" className="site-header-heading-link">Searchagrahm</Link></h2>
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