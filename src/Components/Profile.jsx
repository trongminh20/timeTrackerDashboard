import React, { Component } from 'react';
import Menu from './Menu';

class Profile extends Component {
  
  constructor(props){
    super(props);
    this.imageUrl = this.props.imageUrl;
    this.name = this.props.name;
  }

  render() { 
    return <div className="profile--container">
      <img className= "profile--img" src={this.imageUrl} alt="" />
      <h3 id="name">{this.name}</h3>
    </div>;
  }
}
 
export default Profile;