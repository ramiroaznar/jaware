import React, { Component } from 'react';

export default class Banner extends Component {
  render() {
    switch (this.props.type) {
      case 'eco':
        return (
          <div className="as-banner as-bg--success as-color--type-04">
            <div className="as-banner__icon">
              <i className="as-icon-tick-circle-fill"></i>
            </div>
            <div className="as-banner__content">Producto con impacto ecológico favorable</div>
          </div>);
      case 'warning':
        return (
          <div className="as-banner as-bg--warning as-color--type-04">
            <div className="as-banner__icon">
              <i className="as-icon-alert-fill"></i>
            </div>
            <div className="as-banner__content">Producto con impacto ecológico moderado</div>
          </div>);
      case 'danger':
        return (
          <div className="as-banner as-bg--error as-color--type-04">
            <div className="as-banner__icon">
              <i className="as-icon-alert-fill"></i>
            </div>
            <div className="as-banner__content"> Producto con alto impacto ecológico</div>
          </div>);
      default:
        return (
          <div className="as-banner">
            <div className="as-banner__icon">
              <i className="as-icon-info"></i>
            </div>
            <div className="as-banner__content">Producto con impacto ecológico neutro</div>
          </div>);
    }
  }
}
