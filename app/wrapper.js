import React, {Component} from 'react';
import {render} from 'react-dom';
import Header from './header.js';

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}