import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar';
import animals from '../../state/animals';
import arrow from './img/arrow.svg';
import non_product from './img/non-product.png';
import check from './img/check.svg';
import alert from './img/alert.svg';

import './details.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getProductData();
  }

  render() {
    if (!this.state.name) {
      return ('Loading...')
    }

    if (this.state.name == 'not_found') {
      return (
        <section className="non-product">
          <div className="non-product_text">
            <h1 className="non-product_title">Product not found</h1>
            <a href="#" className="non-product_link"><span>Try again</span></a>
          </div>

          <span className="non-product_media">
            <img src={non_product} alt="" />
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
              <h2 className="details__subtitle">{this.state.brand}</h2>
              <h1 className="details__title">{this.state.name}</h1>
            </div>
            <div className="details-section_headerInfo">
              <ul className="details-section_headerProducts">
                <li className="is-active">
                  <img src={alert} />
                  Oil Palm
                </li>
                <li>Soy</li>
                <li>Livestock Farming</li>
              </ul>
            </div>
          </div>

          <div className="details__section">
            <h3 className="details__sectionTitle">Ecological impact</h3>
            {/* <h3 className="details__subtitle">Palm Oil</h3> */}
            <p className="details__sectionText">{this.state.description}</p>
          </div>

          <div className="details__section">
            <h3 className="details__sectionTitle">Affected species</h3>
            <ul className="details__list">
              {this.getAnimals()}
            </ul>
          </div>

          <div className="details__section">
            <h3 className="details__sectionTitle">Alternatives</h3>
            <ul className="details__listSubstitute">
              {this.getAlternatives()}
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

  getAlternatives() {
    if (!this.state.alternatives) {
      return;
    }
    return this.state.alternatives.split(',').map((alternative, index) => {
      return (<li key={index} className="details__listSubstituteItem">
        <img src={check} />
        <h4>{alternative}</h4>
      </li>)
    });
  }

  getProductData() {
    fetch(`https://ramirocartodb.carto.com/api/v2/sql?q=SELECT * FROM products`)
      .then(raw => raw.json())
      .then(response => {
        const product = response.rows.find(product => product.bar_code == this.props.match.params.id);
        if (!product) {
          return this.setState({ name: 'not_found' });
        }
        product.afected_animals = animals;
        this.setState(product);
      });
  }
}
