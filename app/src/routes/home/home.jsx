import React, { Component } from 'react';
import Product from './components/Product';
import './home.css';
import bg from './img/bg.jpg';

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
        <div className="app-home_container">
          <main className="app-home">
            <div className="app-inner">
              <header className="app-home__header">
                <h1 className="app-home_title">Jaware</h1>
              </header>
              <div className="app-home__form">
                <div className="form-group">
                  <fieldset class="form-group_container">
                    <input value={this.state.input} onChange={this.onChangeHandler.bind(this)} className="app-home_input" type="text" name="search" id="search" autocomplete="off" placeholder="Introduce the codebar number and discover the social impact of what you buy" />
                    <span></span>
                  </fieldset>
                  <p class="app-home_link" onClick={() => this.props.history.push('/scan')}>
                    <span>or scan the barcode</span>
                  </p>
                </div>
                <ul className="app-home__results">
                  {this.getResults()}
                </ul>
              </div>
            </div>
          </main>
          <aside className="app-home_media">
            <img src={bg} alt="" />
          </aside>
        </div>
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
      .map((product, index) => <Product onClick={() => this.props.history.push(`/details/${product.name}`)} key={index} name={product.name} src={product.src}></Product>);
  }
}
