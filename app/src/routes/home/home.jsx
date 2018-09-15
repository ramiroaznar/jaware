import React, { Component } from 'react';
import Product from './components/Product';
import './home.css';
import bg from './img/bg.jpg';

import PRODUCTS from '../../state/products';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      products: PRODUCTS,
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
                  <fieldset className="form-group_container">
                    <input value={this.state.input} onChange={this.onChangeHandler.bind(this)} className="app-home_input" type="text" name="search" id="search" autoComplete="off" placeholder="Introduce the codebar number and discover the social impact of what you buy" />
                    <span></span>
                  </fieldset>
                  <p className="app-home_link" onClick={() => this.props.history.push('/scan')}>
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
      .map((product, index) => <Product history={this.props.history} id={product.id} key={index} name={product.name} src={product.img_url}></Product>);
  }
}
