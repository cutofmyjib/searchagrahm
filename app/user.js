import React, {Component} from 'react';
import {render} from 'react-dom';

export default class User extends Component {
  render() {
    return (
      <div className="card">
        <div className="image">
          <img src={this.props.imgSrc} />
        </div>
        <div className="content">
          <a className="header">{this.props.userName}</a>
          <div className="meta">{this.props.firstName} {this.props.lastName}</div>
        </div>
      </div>
    );
  }
}
