import React, { Component } from 'react';
import Banner from './components/Banner';
import DATA from './data';

import './details.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = DATA[props.match.params.id]
  }

  render() {
    if (!this.state) {
      return <h1 className="as-jumbo">Producto no encontrado</h1>
    }
    return (
      <main className="app-details">
        <Banner type={this.state.type}></Banner>
        <div className="details__img-wrapper">
          <img className="details__img" src={this.state.img_url} alt={this.state.name} />
        </div>

        <div className="details__section">
          <h1 className="as-title">{this.state.name}</h1>
          <div className="details__labels">
            {this.state.badges.map((label, index) => <span key={index} className={label.type}> {label.text} </span>)}
          </div>
        </div>

        <div className="details__section">
          <h3 className="as-subheader">Impacto ecológico</h3>
          <p className="as-body">{this.state.eco_info}</p>
        </div>

        <div className="details__section">
          <h3 className="as-subheader">Animales afectados</h3>
          <ul className="as-list">
            {this.state.afected_animals.map((animal, index) => <li key={index}  className="as-list__item"><a href={animal.href}>{animal.name}</a></li>)}
          </ul>
        </div>
      </main>
    );
  }
}
