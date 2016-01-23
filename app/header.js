import React, {Component} from 'react';
import {render} from 'react-dom';
import { hashHistory, Link } from 'react-router';
import Searchbox from './searchbox.js';

export default class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <h2 className="site-header-heading"><Link to="/" className="site-header-heading-link">Searchagrahm</Link></h2>
        <div className="ui search site-header-center">
          <div className="ui icon input">
            <Searchbox />
            <i className="search icon"></i>
          </div>
        </div>
      </header>
    );
  }
}