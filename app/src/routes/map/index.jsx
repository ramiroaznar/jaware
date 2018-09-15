import React, { Component } from 'react';

export default class Map extends Component {
  render() {
    return (
      <main className="as-app-content">
        <div className="as-map-wrapper"></div>
        <aside className="as-sidebar as-sidebar--right"></aside>
      </main>
    );
  }
}
