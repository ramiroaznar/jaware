import React, { Component } from 'react';
import './progress-bar.css';

export default class ProgressBar extends Component {
  render() {
    const style = {
      width: `${this.props.value}%`,
    }
    return (
      <div className="progress-barContainer">
        <div className="progress-bar">
          <div style={style} className="progress-bar__value"></div>
        </div>
        <div className="progress-bar__text">{this.props.value}%</div>
      </div>
    );
  }
}
