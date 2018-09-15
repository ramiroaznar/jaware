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
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
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
    const source = new window.carto.source.Dataset('mammals_spps');
    const viz = new window.carto.Viz(`
      color: red,
      strokeWidth: 0,
      filter: $name == '${this.props.match.params.id}'
    `);

    this.setState({ viz, map });
    const layer = new window.carto.Layer('layer', source, viz);

    layer.addTo(map, 'watername_ocean');
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
    const { name, sname, text, status, population, overlap } = this.state;
    return <Panels overlap={overlap} name={name} sname={sname} text={text} status={status} population={population} ></Panels>
  }

  getData() {
    fetch(`https://ramirocartodb.carto.com/api/v2/sql?q=SELECT name, species, description, status, population, overlap, x, y FROM mammals_spps WHERE name LIKE '${this.state.name}'`)
      .then(raw => raw.json())
      .then(response => {
        const { description, overlap, population, species, status, x, y } = response.rows[0];
        this.setState({
          sname: species,
          text: description,
          population: population,
          status: status,
          overlap
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
