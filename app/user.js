import React, {Component} from 'react';
import {render} from 'react-dom';

export default class User extends Component {
  render() {
    return (
      <div className="card">
        <div className="image">
          <img src={this.props.profile_picture} />
        </div>
        <div className="content">
          <a className="header">{this.props.username}</a>
          <div className="meta">{this.props.full_name} {this.props.lastName}</div>
        </div>
      </div>
    );
  }
}
