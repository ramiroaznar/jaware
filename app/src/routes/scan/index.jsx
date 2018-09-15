import React, { Component } from 'react';
import Quagga from 'quagga';
import './scan.css';

const QUAGGA_OPTIONS = {
  inputStream: {
    type: "LiveStream",
    constraints: {
      width: { min: 640 },
      height: { min: 480 },
      aspectRatio: {
        min: 1,
        max: 100
      },
      facingMode: "environment"
    }
  },
  locator: {
    patchSize: "medium",
    halfSample: true
  },
  numOfWorkers: 2,
  frequency: 10,
  decoder: {
    readers: [{
      format: "ean_reader",
      config: {}
    }]
  },
  locate: true
};



export default class Scan extends Component {
  componentDidMount() {
    Quagga.init(QUAGGA_OPTIONS, (err) => {
      if (err) {
        console.error(err);
      }
      Quagga.start();
    });

    Quagga.onDetected(result => {
      Quagga.stop();
      this.props.history.push(`details/${result.codeResult.code}`);
    });
  }

  componentWillUnmount() {
    Quagga.stop();
  }

  render() {
    return (
      <main className="app-scan">
        <div id="interactive" className="viewport"></div>
      </main>
    );
  }

  _onQuagaInit(err) {
    if (err) {
      console.log(err);
      return
    }
    console.log("Initialization finished. Ready to start");
  }

}
