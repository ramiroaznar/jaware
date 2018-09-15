import React, { Component } from 'react';
import './product.css';

export default class Product extends Component {
  render() {
    return (
      <li onClick={this.onClick.bind(this)} className="product">
        <img className="product__img" src={this.props.src} alt={this.props.name} />
        <div className="product__data">
          {this.props.name}
        </div>
      </li>
    );
  }

  onClick() {
    this.props.history.push(`/details/${this.props.id}`);
  }
}
