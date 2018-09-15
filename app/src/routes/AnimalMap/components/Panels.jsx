import React, { Component } from 'react';
import './panels.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="app-map">
        <div className="as-panel as-panel--top as-panel--right as-panel--vertical">
          <div className="as-panel__element">
            <div class="app-map_header">
              <h2 className="as-subheader">{this.props.sname}</h2>
              <div class="app-map_headerTitle">
                <h1 className="as-title">{this.props.name}</h1>
              </div>
            </div>
            <span className="as-badge as-bg--warning"> {this.props.status}</span>
            <p className="app-map_text">
              {this.props.text}
            </p>
            <dl class="app-map_list">
              <dt className="as-subheader">Population:</dt>
              <dd className="as-body">{this.props.population}</dd>
              <dt className="as-subheader">Habitat Loss:</dt>
              <dd className="as-body">{this.props.overlap} % </dd>
            </dl>
          </div>
        </div>
      </div>
    );
  }
}
