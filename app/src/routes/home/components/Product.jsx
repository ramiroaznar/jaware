import React, { Component } from 'react';
import './product.css';

export default class Product extends Component {
  render() {
    return (
      <li className="product">
        <img className="product__img" src={this.props.src} alt={this.props.name} />
        <div className="product__data">
          {this.props.name}
        </div>
      </li>
    );
  }
}
