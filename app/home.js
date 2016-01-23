import React, {Component} from 'react';
import {render} from 'react-dom';
import { hashHistory, Router, Route, Link } from 'react-router'
import Searchbox from './searchbox.js';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="ui search">
          <div className="ui icon input">
            <Searchbox />
            <i className="search icon"></i>
          </div>
        </div>
        <div className="results"></div>
        <h1 className="sitename">Searchagrahm</h1>
      </div>
    );
  }
}
