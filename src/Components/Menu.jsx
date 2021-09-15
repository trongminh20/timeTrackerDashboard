import React, { Component } from 'react';
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.nav = this.props.nav; //value of the button
    this.func = this.props.func; // function will be use
  }
  render() {
    return (
      //  depending on value of the button, onClick will be assigned with the different function
      <button className="navbar__btn " onClick={this.func}>
        {this.nav}
      </button>
    );
  }
}

export default Menu;