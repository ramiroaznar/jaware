import React, { Component } from 'react';
import Panels from './components/Panels';
import './animal-map.css';

export default class AnimalMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarClass: 'as-panels',
      panels: {
        name: 'Jaguar',
        sname: 'Panthera onca',
        text: 'El jaguar, yaguar o yaguareté ​ es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cuatro especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre y el león.',
        population: '10.000',
        status: 'En peligro'
      }
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
    const map = new window.mapboxgl.Map({
      container: 'map',
      style: 'https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json',
      center: [0, 30],
      zoom: 2,
      dragRotate: false,
    });

    // Define user
    window.carto.setDefaultAuth({
      user: 'cartovl',
      apiKey: 'default_public'
    });

    // Define layer
    const source = new window.carto.source.Dataset('ne_10m_populated_places_simple');
    const viz = new window.carto.Viz();
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
    if (!this.state.panels) {
      return
    }
    const { name, sname, text, status, population } = this.state.panels;
    return <Panels name={name} sname={sname} text={text} status={status} population={population} ></Panels>
  }
}
