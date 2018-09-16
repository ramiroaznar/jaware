import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar';
import products from '../../state/products';
import arrow from './img/arrow.svg';
import non_product from './img/non-product.png';

import './details.css';

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = products.find(product => product.id == props.match.params.id);
  }

  render() {
    if (!this.state) {
      return (
        <section className="non-product">
          <div className="non-product_text">
            <h1 className="non-product_title">Product not found</h1>
            <a href="#" className="non-product_link"><span>Try again</span></a>
          </div>
          
          <span className="non-product_media">
            <img src={non_product} alt=""/>
          </span>
        </section>
      )
    }
    return (
      <main className="app-details">
        <aside className="details__img-wrapper">
          <div onClick={() => this.props.history.push('/')} className="details__imgBack">
            <img src={arrow} />
          </div>
          <img className="details__img" src={this.state.img_url} alt={this.state.name} />
        </aside>

        <section className="details__section-wrapper">
          <div className="details-section_header">
            <div className="details-section_headerTitles">
              <h2 className="details__subtitle">CREMA</h2>
              <h1 className="details__title">{this.state.name}</h1>
            </div>
            <div className="details-section_headerInfo">
              <h3 className="details-section_headerNumber">98%</h3>
              <ul className="details-section_headerProducts">
                <li className="is-active">Palm Oil </li>
                <li>Soy</li>
                <li>Livestock Farming</li>
              </ul>
            </div>
          </div>

          <div className="details__section">
            <h3 className="details__sectionTitle">Ecological impact</h3>
            <h3 className="details__subtitle">Palm Oil</h3>
            <p className="details__sectionText">{this.state.description}</p>
          </div>

          <div className="details__section">
            <h3 className="details__sectionTitle">Affected species</h3>
            <ul className="details__list">
              {this.getAnimals()}
            </ul>
          </div>
        </section>
      </main>
    );
  }

  getAnimals() {
    return this.state.afected_animals.map((animal, index) => {
      return (<li key={index} className="details__listItem">
        <div className="details__listItem-link-wrapper">
          <a href={`/map/${animal.name}`}>
            <span>{animal.name}</span>
          </a>
        </div>
        <ProgressBar value={animal.value}></ProgressBar>
      </li>)
    });
  }
}
