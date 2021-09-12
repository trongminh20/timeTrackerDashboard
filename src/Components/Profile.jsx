import React, { Component } from 'react';
import Menu from './Menu';
class Profile extends Component {
  
  constructor(props){
    super(props);
    this.imageUrl = this.props.imageUrl;
    this.name = this.props.name;
  }
  render() { 
    return <div>
      <img className= "profileImg" src={this.imageUrl} alt="" />
      <h3>{this.name}</h3>
    </div>;
  }
}
 
export default Profile;