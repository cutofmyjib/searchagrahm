import React, {Component} from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router'

export default class User extends Component {
  render() {
    const userPath = "/user/" + this.props.id;

    return (
      <div className="red card">
        <Link to={userPath}  className="image">
          <img src={this.props.profile_picture} />
        </Link>
        <div className="content">
          <div className="header">{this.props.username}</div>
          <div className="meta">{this.props.full_name}</div>
        </div>
      </div>
    );
  }
}
