import React, { Component } from 'react';
import { data } from '../data';
import {svg_icon} from './svg_icon';

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className="card">
      {/* Card header will be style with the color and svg ico */}
      <div className="card__header" id={this.props.headerID}>
        {/*adding svg ico dynamically according to the card content */}
        {
          svg_icon.map(
            ico => {
             if(this.props.headerID == ico.headerId){
               return <img src= {ico.imgUrl}></img>
             }
            })
        }
      </div>
      {/* Card body, will display main information of report including strategies, current spending hours and previous hours for daily, weekly and monthly */}
      <div className="card__body">
        {/* strategies title */}
        <div className="card__body--title">
          <p className="title">{this.props.title}</p>
          <span>...</span>
        </div>
        {/* current hours spending */}
        <div className="current__hour"><h1>{this.props.currentHours + ' Hrs'}</h1></div>
        {/* previous spent */}
        <div className="prev__hour">
          <p>{this.props.timeframe}- {this.props.prev} hrs</p>
        </div>
      </div> {/*end of card */}
    </div>;{/*end of card container*/}
  }
}

export default Card;