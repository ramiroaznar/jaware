import React, { Component } from 'react';
import Product from './components/Product';
import './home.css';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          name: 'Nocilla',
          src: 'https://static.condisline.com/resize_1280x1024/images/catalog/large/207523.jpg'
        },
        {
          name: 'Axe',
          src: 'https://www.perfumeriaslaguna.com/images/products/axe-desodorante-spray-150-ml-you.jpg',
        },
        {
          name: 'Piano',
          src: 'http://lallavedeafinar.com/image/cache/data/Juego%20de%20plaquetas%20para%20teclado%20con%20frontal-500x500.jpg'
        }
      ],
      input: '',
    }
  }

  render() {
    return (
      <React.Fragment>
        <main className="app-home">
          <header className="app-home__header">
            <h1 className="as-title">JaWare</h1>
            <h4 className="as-subheader">Descubre el impacto social de lo que compras y consumes.</h4>
          </header>
          <div className="app-home__form">
            <div className="form-group">
              <input value={this.state.input} onChange={this.onChangeHandler.bind(this)} className="as-input" type="text" name="search" id="search" placeholder="Buscar un producto" />
              <input className="as-btn as-btn--secondary" onClick={() => this.props.history.push('/scan')} type="button" value="Escanear" />
            </div>
          </div>
          <section className="app-home__results">
            {this.getResults()}
          </section>
        </main>
      </React.Fragment>
    );
  }

  onChangeHandler(e) {
    this.setState({
      input: e.target.value,
    })
  }

  getResults() {
    if (!this.state.input) {
      return;
    }
    return this.state.products
      .filter(product => product.name.toLowerCase().includes(this.state.input.toLowerCase()))
      .map((product, index) => <Product key={index} name={product.name} src={product.src}></Product>);
  }
}
