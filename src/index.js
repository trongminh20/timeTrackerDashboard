import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import Card from './Components/Card';
import { data } from './data';
import Profile from './Components/Profile';
import Menu from './Components/Menu';
import './SCSS/index.scss';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      frame: "daily"
    };
    this.getDaily = this.getDaily.bind(this);
    this.getWeekly = this.getWeekly.bind(this);
    this.getMonthly = this.getMonthly.bind(this);
  }
  menu = ["Daily", "Weekly", "Monthly"];

  getDaily() {
    this.setState({
      frame: "daily"
    })
  }
  getWeekly() {
    this.setState({
      frame: "weekly"
    })
  }

  getMonthly() {
    this.setState({
      frame: "monthly"
    })
  }

  render() {
    return <div id="wrapper">
      <div id="profile--container">
        <Profile imageUrl={"./images/image-jeremy.png"} name="Jeremy Robson" />
        <div className="navbar">
          {this.menu.map(
            item => <Menu nav={item}
              func={
                (item === "Daily") ?
                  this.getDaily :
                  (item === "Weekly") ?
                    this.getWeekly :
                    this.getMonthly} />)}
        </div>
      </div>
      <div className="card--container">
        {
          data.map(dt => {
            return <Card headerID={(dt.title.split(' ').join('').toLowerCase())}title={dt.title} currentHours={dt.timeframes[this.state.frame].current} timeframe= {(this.state.frame == "daily")? "Last Day " : (this.state.frame == "weekly")? "Last Week ":"Last Month "} prev={dt.timeframes[this.state.frame].previous} />
          })
        }
      </div>
    </div>
  }
}
ReactDOM.render(<App />, document.getElementById('root'));