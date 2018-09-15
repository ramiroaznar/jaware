import React, { Component } from 'react';
import './panels.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="as-panel as-panel--top as-panel--right as-panel--vertical">
        <div className="as-panel__element as-bg--support-01">
          <h1 className="as-title">{this.props.name}</h1>
          <h2 className="as-subheader">{this.props.sname}</h2>
        </div>

        <div className="as-panel__element">
          <h2 className="as-subheader">Descripción</h2>
          <p className="as-body">
            {this.props.description}
            El jaguar, yaguar o yaguareté N 1​ (Panthera onca) es un carnívoro félido de la subfamilia de los Panterinos y género Panthera. Es la única de las cuatro especies actuales de este género que se encuentra en América. También es el mayor félido de América y el tercero del mundo, después del tigre (Panthera tigris) y el león (Panthera leo). Su distribución actual se extiende desde el extremo sur de Estados Unidos continuando por gran parte de América Central y Sudamérica hasta el norte y noreste de Argentina. Exceptuando algunas poblaciones en Arizona (suroeste de Tucson), esta especie ya ha sido prácticamente extirpada en los Estados Unidos desde principios de la década de 1900.N 2
          </p>
        </div>

        <div className="as-panel__element">
          <h2 className="as-subheader">Info</h2>
          <p className="as-badge as-bg--warning"> {this.props.status} </p>
          <h2 className="as-subheader">Population:</h2>
          <p className="as-body">{this.props.population}</p>
          {/* <h2 className="as-subheader">Solapamiento:</h2>
          <p className="as-body">{this.props.solap}</p> */}
        </div>
      </div >
    );
  }
}
