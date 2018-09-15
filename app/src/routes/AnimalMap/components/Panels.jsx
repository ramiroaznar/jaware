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
        </div>

        <div className="as-panel__element">
          <p className="as-body">
            {this.props.text}
          </p>
          <p className="as-badge as-bg--warning"> {this.props.status} </p>
        </div>

        <div className="as-panel__element">
          <as-histogram-widget heading="Population" show-header show-clear> </as-histogram-widget>
          <h2 className="as-subheader">Habitat Loss:</h2>
          <p className="as-body">{this.props.overlap} %</p>
        </div>
      </div >
    );
  }
}
