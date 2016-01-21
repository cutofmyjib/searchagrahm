import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router'

export default class User extends Component {
  render() {
    return (
      <div className="red card">
        <Link to="user1" className="image">
          <img src={this.props.profile_picture} />
        </Link>
        <div className="content">
          <div className="header">{this.props.username}</div>
          <div className="meta">{this.props.full_name} {this.props.lastName}</div>
        </div>
      </div>
    );
  }
}
