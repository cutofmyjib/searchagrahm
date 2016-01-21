import React, {Component} from 'react';
import {render} from 'react-dom';
import {connect} from 'react-refetch'
import User from './user.js';

export default class Users extends Component {
  render() {
    var usersData = [
      {
        imgSrc: "http://thefuturists.ca/wp-content/uploads/2010/10/DieAntwoordPoster1.jpg",
        userName: "Die_Antwoord",
        firstName: "Dee",
        lastName: "Antwoord"
      },
      {
        imgSrc: "https://s-media-cache-ak0.pinimg.com/736x/68/99/97/689997e5bcce1ac339738232f87a8855.jpg",
        userName: "Grimez_Antwoord",
        firstName: "Actually",
        lastName: "Grimes"
      }
      ];

    var userCards = usersData.map(function(data){
        return <User {...data} />
    });
    return (
      <div className="results-body">
        <div className="ui link cards">
          {userCards}
        </div>
      </div>
    );
  }
}
