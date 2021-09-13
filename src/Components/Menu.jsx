import React, { Component } from 'react';
class Menu extends React.Component {
  constructor(props){
    super(props);
    this.nav = this.props.nav;
    this.func = this.props.func;
  }
  render() { 
    return <button className="navbar__btn " onClick={this.func}>{this.nav}</button>;
  }
}
 
export default Menu;