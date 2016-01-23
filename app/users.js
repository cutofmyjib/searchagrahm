import React, {Component} from 'react';
import {render} from 'react-dom';
import reqwest from 'reqwest';
import User from './user.js';

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = { type: 'start' };
  }

  componentDidMount() {
    this.setState({ type: 'loading' });

    reqwest({
      url: 'https://api.instagram.com/v1/users/search?q=' + this.props.location.query.username + '&access_token=337924724.c2da448.945bb99df5c44b4e9ef5b69d6e0859ee',
      type: 'jsonp',
      method: 'get'
    })
    .then(response => this.setState({ type: 'success', response }))
    .fail(err => this.setState( { type: 'error' }));
  }

  render() {
    var userCards = []
    if (this.state.type === 'success') {
      userCards = this.state.response.data.map(function(data){
        return <User {...data} />
      });
    }


    return (
      <div className="results-body">
        <div className="ui link cards">
          {userCards}
        </div>
      </div>
    );
  }
}
