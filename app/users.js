import React, {Component} from 'react';
import {render} from 'react-dom';
import reqwest from 'reqwest';
import User from './user.js';
import {SearchError, SearchLoading} from './message.js';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 'start' };
  }

  getContent() {
    this.setState({ status: 'loading' });

    reqwest({
      url: 'https://api.instagram.com/v1/users/search?q=' + this.props.location.query.username + '&access_token=337924724.c2da448.945bb99df5c44b4e9ef5b69d6e0859ee',
      type: 'jsonp',
      method: 'get'
    })
    .then(response => this.setState({ status: 'success', response }))
    .fail(err => this.setState( { status: 'error' }));
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
    if (this.state.status === 'success') {
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
    } else if (this.state.status === 'error') {
      return (
        <SearchError />
      );
    } else {
      return (
        <SearchLoading />
      );
    }

  }
}
