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
          <h2 className="as-subheader">Descripción</h2>
          <p className="as-body">
            {this.props.text}
          </p>
        </div>

        <div className="as-panel__element">
          <h2 className="as-subheader">Info</h2>
          <p className="as-badge as-bg--warning"> {this.props.status} </p>
          <h2 className="as-subheader">Population:</h2>
          <p className="as-body">{this.props.population}</p>
          <h2 className="as-subheader">Solapamiento:</h2>
          <p className="as-body">{this.props.solap}</p>
        </div>
      </div >
    );
  }
}
