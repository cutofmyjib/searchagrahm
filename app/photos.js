import React, {Component} from 'react';
import {render} from 'react-dom';
import reqwest from 'reqwest';
import Photo from './photo.js';

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = { status: 'start'}
  }

  componentDidMount() {
    this.setState({ status: 'loading' });
    // https://github.com/rackt/react-router/blob/master/docs/API.md#routeParams
    reqwest({
      url: 'https://api.instagram.com/v1/users/' + this.props.params.userId + '/media/recent/?access_token=337924724.c2da448.945bb99df5c44b4e9ef5b69d6e0859ee&count=10',
      type: 'jsonp',
      method: 'get'
    })
    .then(response => this.setState({ status: 'success', response }))
    .fail(err => this.setState( { status: 'error' }));
  }

  render() {
    //if promise
    var photoCards = [];
    if (this.state.status === 'success') {
      console.log(this.state.response.data);
      var photoArray = this.state.response.data;
      photoCards = photoArray.map(function(imgData){
        return <Photo {...imgData} />
      });
      return (
        <div className="results-body">
          <h3 className="ui header">10 current photos from {this.state.response.data[0].user.username}</h3>
          <div className="ui four cards">
            {photoCards}
          </div>
        </div>
      );
    } else {
      return (
        <div className="results-body">
          <h3 className="ui header">{this.state.status}</h3>
        </div>
      );
    }
  }

}