import React, { Component } from 'react';
import Menu from './Menu';

class Profile extends Component {

  constructor(props) {
    super(props);
    this.imageUrl = this.props.imageUrl;
    this.name = this.props.name;
  }

  render() {
    return <div className="profile">
      <img className="profile__img" src={this.imageUrl} alt="" />
      <div>
        <p id="report">Report for</p>
        <h1 id="profile__name">{this.name}</h1>
      </div>
    </div>;
  }
}

export default Profile;