import React, { Component } from 'react';
import Product from './components/Product';
import './home.css';
import bg from './img/bg.jpg';
import bg_mobile from './img/bg-mobile.jpg';

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
            <div className={"app-inner " + (this.state.input ? 'search--active' : '')}>
              <header className="app-home__header">
                <h1 className="app-home_title">Jaware</h1>
              </header>
              <div className="app-home__form">
                <form className="form-group">
                  <fieldset className="form-group_container">
                    <input value={this.state.input} onChange={this.onChangeHandler.bind(this)} className="app-home_input" type="text" name="search" id="search" autoComplete="off" placeholder="Search for a product to discover it's impact" />
                    <span></span>
                  </fieldset>
                  <p className="app-home_link" onClick={() => this.props.history.push('/scan')}>
                    <span>or scan the barcode</span>
                  </p>
                  <ul className={"app-home__results " + (this.state.input ? 'search--active' : '')}>
                    {this.getResults()}
                  </ul>
                </form>
              </div>
            </div>
          </main>

          <aside className="app-home_media">
            <img src={bg} alt="" class="app-home_media--desktop" />
            <img src={bg_mobile} alt="" class="app-home_media--mobile" />
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
