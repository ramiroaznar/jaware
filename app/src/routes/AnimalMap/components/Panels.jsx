import React, { Component } from 'react';
import './panels.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="app-map">
        <div className="as-panel as-panel--top as-panel--right as-panel--vertical">
          <div className="as-panel__element">
            <div className="app-map_header">
              <h2 className="as-subheader">{this.props.sname}</h2>
              <div className="app-map_headerTitle">
                <h1 className="as-title">{this.props.name}</h1>
              </div>
              <div className="app-map_media">
                <img src={this.props.img_url} alt="" />
              </div>
            </div>
            <span className="as-badge as-bg--warning"> {this.props.status}</span>
            <p className="app-map_text">
              {this.props.text}
            </p>
            <div className="app-map_description">
              <dl className="app-map_list">
                <dt className="as-subheader">Population:</dt>
                <dd className="as-body">{this.props.population}</dd>
              </dl>
              <dl className="app-map_list">
                <dt className="as-subheader">Habitat Loss:</dt>
                <dd className="as-body">{this.props.overlap} % </dd>
              </dl>
            </div>
            <as-histogram-widget heading="Population" show-header> </as-histogram-widget>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const histogramWidget = document.querySelector('as-histogram-widget');
    histogramWidget.data = this.generateHistogramData();
  }

  generateHistogramData() {
    let last = this.props.population;
    const data = [{ start: 200, end: 2018, value: last }];
    for (let i = 0; i < 6; i++) {
      last += Math.floor(Math.random() * (last * 0.5)) + 1;
      data.unshift({ start: 200, end: 2018, value: last });
    }
    console.log(data);
    return data;
  }
}
