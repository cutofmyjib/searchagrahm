import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Photo extends Component {
  render() {
    return (
      <div className="ui fluid card">
        <div className="image">
          <img src={this.props.images.thumbnail.url} />
        </div>
        <div className="content">
            <span className="description">{this.props.caption ? this.props.caption.text : ''}</span>
        </div>
        <div className="extra content">
          <span className="right floated">
            <i className="heart icon"></i>
            {this.props.likes.count}
          </span>
          <i className="comment icon"></i>
          {this.props.comments.count}
        </div>
      </div>
    );
  }
}