import React, { Component } from 'react';
import { data } from '../data';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="card">
      <div className="card__header" id={this.props.headerID}>
      </div>
      <div className="card__body">
        <div className="card__body--title">
          <p className="title">{this.props.title}</p>
          <span>...</span>
        </div>
        <div className="current__hour"><h2>{this.props.currentHours + ' Hrs'}</h2></div>
        <div className="prev__hour">
          <p>{this.props.timeframe}- {this.props.prev} hrs</p>
        </div>
      </div>
    </div>;
  }
}

export default Card;