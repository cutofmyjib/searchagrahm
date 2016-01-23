import React, {Component} from 'react';
import {render} from 'react-dom';
import reqwest from 'reqwest';
import User from './user.js';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'start' };
  }

  getContent() {
    this.setState({ type: 'loading' });

    reqwest({
      url: 'https://api.instagram.com/v1/users/search?q=' + this.props.location.query.username + '&access_token=337924724.c2da448.945bb99df5c44b4e9ef5b69d6e0859ee',
      type: 'jsonp',
      method: 'get'
    })
    .then(response => this.setState({ type: 'success', response }))
    .fail(err => this.setState( { type: 'error' }));
  }

  componentDidMount() {
    this.getContent();
  }

  //header component has input field, need to call getContent function if there's a change
  componentDidUpdate(prevProps) {
    if (this.props.location.query.username !== prevProps.location.query.username) {
      this.getContent();
    }
  }

  render() {
    var userCards = [];
    if (this.state.type === 'success') {
      if (this.state.response.data.length < 1) {
        return (
          <div className="ui info message">
            <div className="header">
              Sorry, couldn&apos;t find a username &apos;{this.props.location.query.username}&apos;.
            </div>
          </div>
        );
      }
      userCards = this.state.response.data.map(function(data){
        return <User {...data} />
      });
      return (
        <div className="results-body">
          <h3 className="ui header">Search results for '{this.props.location.query.username}'</h3>
          <div className="ui link cards">
            {userCards}
          </div>
        </div>
      );
    } else if (this.state.type === 'error') {
      return (
        <div className="ui error message">
          <div className="header">
            Oops something happened!
          </div>
        </div>
      );
    } else {
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
}
