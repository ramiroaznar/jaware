import React, { Component } from 'react';
import Panels from './components/Panels';
import './animal-map.css';

export default class AnimalMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarClass: 'as-panels',
      name: props.match.params.id,
    }
  }

  render() {
    return (
      <React.Fragment>
        <div role="tablist" className="as-toolbar-tabs as-tabs as-tabs--xl">
          <button onClick={this.showMap.bind(this)} role="tab" className="as-tabs__item as-tabs__item--active">MAP</button>
          <button onClick={this.showInfo.bind(this)} role="tab" className="as-tabs__item">INFO</button>
        </div>
        <main className="as-app-content">
          <div className="as-map-wrapper">
            <div id="map"></div>
            <div className={this.state.sidebarClass}>
              {this.getPanels()}
            </div>
          </div>
        </main>
      </React.Fragment>
    );
  }

  componentDidMount() {
    this.getData();
    const map = new window.mapboxgl.Map({
      container: 'map',
      style: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
      center: [110, 6.5],
      zoom: 3,
      dragRotate: false,
    });

    // Define user
    window.carto.setDefaultAuth({
      user: 'ramirocartodb',
      apiKey: 'default_public'
    });

    // Define layer
    const source = new window.carto.source.Dataset('habitat_loss');
    const viz = new window.carto.Viz(`
      color: #F3522B,
      strokeWidth: 0,
      filter: and(
        animation(
          linear($cartodb_id, 1, 88), 10, fade(1, 1)
        ),
        $name == '${this.props.match.params.id}'
        )
    `);

    // Palm trees
    // Define layer
    const source_palm = new window.carto.source.Dataset('palm_oil_mills');
    const viz_palm = new window.carto.Viz(`
      color: green,
      width: 20,
      strokeWidth: 0,
      symbol: image('/palm.svg')
      filter: animation($cartodb_id, 10, fade(1, 100000))
    `);

    this.setState({ viz, map });
    const layer = new window.carto.Layer('layer', source, viz);

    const layer_palm = new window.carto.Layer('layer_palm', source_palm, viz_palm);

    layer.addTo(map, 'watername_ocean');
    layer_palm.addTo(map, 'watername_ocean');
  }

  showMap() {
    this.setState({
      sidebarClass: 'as-panels',
    })
  }

  showInfo() {
    this.setState({
      sidebarClass: 'as-panels as-panels--visible',
    })
  }

  getPanels() {
    if (!this.state.sname) {
      return
    }
    const { name, sname, text, status, population, overlap, img_url } = this.state;
    return <Panels img_url={img_url} overlap={overlap} name={name} sname={sname} text={text} status={status} population={population} ></Panels>
  }

  getData() {
    fetch(`https://ramirocartodb.carto.com/api/v2/sql?q=SELECT name, species, description, status, population, overlap, x, y, img_url FROM mammals_spps WHERE name LIKE '${this.state.name}'`)
      .then(raw => raw.json())
      .then(response => {
        const { description, overlap, population, species, status, x, y, img_url } = response.rows[0];
        this.setState({
          sname: species,
          text: description,
          population: population,
          status: status,
          overlap,
          img_url
        });
        console.log(x, y);
        if (x && y) {
          this.state.map.flyTo({
            center: [x, y],
            zoom: 5,
          });
        }
      });
  }
}
