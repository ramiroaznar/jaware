import React, { Component } from 'react';
import './panels.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="as-panel as-panel--top as-panel--right as-panel--vertical">
        <div className="as-panel__element as-bg--support-01">
          <h1 className="as-title">{this.props.name}</h1>
          <h2 className="as-subheader">{this.props.sname}</h2>
        </div>

        <div className="as-panel__element">
          <img className="as-panel__img" src={this.props.img_url} alt="" />
          <hr />
          <p className="as-badge as-bg--warning"> {this.props.status} </p>
        </div>

        <div className="as-panel__element">
          <p className="as-body">
            {this.props.text}
          </p>
        </div>

        <div className="as-panel__element">
          <as-histogram-widget heading="Population" show-header> </as-histogram-widget>
        </div>
      </div >
    );
  }

  componentDidMount() {
    const histogramWidget = document.querySelector('as-histogram-widget');
    histogramWidget.data = [
      { start: 2000, end: 2018, value: 6000 },
      { start: 2000, end: 2018, value: 3000 },
      { start: 2000, end: 2018, value: 1000 },
      { start: 2000, end: 2018, value: 500 },
      { start: 2000, end: 2018, value: 300 },
      { start: 2000, end: 2018, value: 280 },
      { start: 2000, end: 2018, value: 275 },
    ];
  }
}
