import React, { Component } from 'react';
class Menu extends React.Component {
  constructor(props){
    super(props);
    this.nav = this.props.nav;
    this.func = this.props.func;
  }
  render() { 
    return <div>
      <button onClick={this.func}>{this.nav}</button>
    </div>;
  }
}
 
export default Menu;