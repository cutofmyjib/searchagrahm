import React, {Component} from 'react';
import {render} from 'react-dom';

export class SearchError extends Component {
  render() {
    return (
      <div className="ui error message">
        <i className="close icon"></i>
        <div className="header">
          Did u type a valid username?
        </div>
      </div>
    );
  }
}

export class SearchLoading extends Component {
  render() {
    return (
      <div className="ui icon message">
          <i className="notched circle loading icon"></i>
          <div className="content">
            <div className="header">
              Just one second
            </div>
            <p>Fetching content for you.</p>
          </div>
        </div>
    );
  }
}

export class SearchEmpty extends Component {
  render() {
    return (
      <div className="ui info message">
        <div className="header">
          Sorry, couldn&apos;t find a username &apos;{this.props.location.query.username}&apos;.
        </div>
      </div>
    );
  }
}