import React, { Component } from 'react';
import ProgressBar from './components/ProgressBar';
import products from '../../state/products';
import arrow from './img/arrow.svg';

import './details.css';

export default class Details extends Component {
  constructor(props) {
    super(props);

    this.state = products.find(product => product.id == props.match.params.id);
  }

  render() {
    if (!this.state) {
      return <h1 className="as-jumbo">Producto no encontrado</h1>
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
          <h2 className="details__subtitle">CREMA</h2>
          <h1 className="details__title">{this.state.name}</h1>

          <div className="details__section">
            <h3 className="details__sectionTitle">Impacto ecológico</h3>
            <p className="details__sectionText">{this.state.description}</p>
          </div>

          <div className="details__section">
            <h3 className="details__sectionTitle">Animales afectados</h3>
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
