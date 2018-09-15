import React, { Component } from 'react';
// import Banner from './components/Banner';
import DATA from './data';
import arrow from './img/arrow.svg';


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
        {/*        <Banner type={this.state.type}></Banner>
*/}     <aside className="details__img-wrapper">
          <div onClick={() => this.props.history.push('/')} className="details__imgBack">
            <img src={arrow} />
          </div>
          <img className="details__img" src={this.state.img_url} alt={this.state.name} />
        </aside>

        <section className="details__section-wrapper">
          <h1 className="details__title">{this.state.name}</h1>
          <ul className="details__labels">
            {this.state.badges.map((label, index) => <li key={index} className={label.type}> {label.text} </li>)}
          </ul>

          <div className="details__section">
            <h3 className="details__sectionTitle">Impacto ecológico</h3>
            <p className="details__sectionText">{this.state.eco_info}</p>
          </div>

          <div className="details__section">
            <h3 className="details__sectionTitle">Ingredientes dañinos</h3>
            <p className="details__sectionText">Aceite de Palma</p>
          </div>


          <div className="details__section">
            <h3 className="details__sectionTitle">Animales afectados</h3>
            <ul className="details__list">
              {this.state.afected_animals.map((animal, index) => <li key={index} className="details__listItem">
                <a href={`/map/${animal.name}`}>
                  <span>{animal.name}</span>
                </a>
              </li>)}
            </ul>
          </div>
        </section>
      </main>
    );
  }
}
