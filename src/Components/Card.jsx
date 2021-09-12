import React, { Component } from 'react';
import { data } from '../data';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="card">
      <div className="cardHeader">
      </div>
      <div className="cardBody">
        <div className="cardBodyTitle">
          <p className="title">{this.props.title}</p>
          <span>...</span>
        </div>
        <div className="cardBodyCurrentHours"><h2>{this.props.currentHours + ' Hrs'}</h2></div>
        <div className="cardBodyPrev">
          <p>{this.props.timeframe}- {this.props.prev} hrs</p>
        </div>
      </div>
    </div>;
  }
}

export default Card;