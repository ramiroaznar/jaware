import React, { Component } from 'react';
import Banner from './components/Banner';

import './details.css';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'danger',
      name: 'Nocilla',
      img_url: 'https://static.condisline.com/resize_1280x1024/images/catalog/large/207523.jpg',
      badges: [
        {
          type: 'as-badge as-bg--badge-greem',
          text: 'Reciclable'
        },
        {
          type: 'as-badge as-bg--badge-blue',
          text: 'Auténtica'
        },
        {
          type: 'as-badge as-bg--badge-warning',
          text: 'Insano'
        },
        {
          type: 'as-badge as-bg--badge-error',
          text: 'Defaunación'
        },
      ]
    }
  }

  render() {
    return (
      <main className="app-details">
        <Banner type={this.state.type}></Banner>

        <div className="details__img-wrapper">
          <img className="details__img" src={this.state.img_url} alt={this.state.name} />
        </div>

        <div className="details__data">
          <h1 className="as-title">{this.state.name}</h1>
          <div className="details__labels">
            {/* {this.state.badges.map((label, index) => <span key={index} className={label.type}> {label.text} </span>)} */}
            <span className="as-badge as-bg--badge-green">Reciclable</span>
            <span className="as-badge as-bg--badge-blue"> Auténtica</span>
            <span className="as-badge as-bg--warning">Insano</span>
            <span className="as-badge as-bg--error">Defaunación</span>
          </div>
          <div className="details__section">
            <h3 className="as-subheader">Impacto ecológico</h3>
            <p className="as-body">
              Debido a la gran demanda internacional, las plantaciones de palmera de aceite están reemplazando
              rápidamente el hábitat de los <a href="">orangutanes</a> en la selva, que se encuentran en peligro crítico,
             puesto que más del 90% de su hábitat ha sido destruido en los últimos 20 años.
           </p>
          </div>
          <div className="details__section">
            <h3 className="as-subheader">Animales afectados</h3>
            <ul className="as-list">
              <li className="as-list__item"><a href="">Orangutan</a></li>
              <li className="as-list__item"><a href="">Jaguar</a></li>
            </ul>
          </div>
        </div>

      </main>
    );
  }
}
