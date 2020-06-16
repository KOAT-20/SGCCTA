import React, { Component } from 'react';
import imagen1 from './cyt.png';
import imagen2 from './concejo.jpg';
import imagen3 from './pie_de_pagina.png';

export class CYT extends Component {
  render() {
    return (
      <div>
        <img src={imagen1} style={{ width: '50px', height: '50px', marginLeft:'40%'}} alt="cyt" />
      </div>
    );
  }
}

export class CCJ extends Component {
  render() {
    return (
      <div className="text-right" style={{ marginLeft: '88%', position: 'absolute' }}>
        <img src={imagen2} style={{ width: '65px', height: '65px', padding: '0' }} alt="ccj" />
      </div>
    );
  }
}

export class CYTPDF extends Component {
  render() {
    return (
      <div>
        <img src={imagen1} style={{ width: '200px', height: '200px'}} alt="cyt" />
      </div>
    );
  }
}

export class CCJPDF extends Component {
  render() {
    return (
      <div className="text-right" style={{position:'absolute', marginLeft:80}}>
        <img src={imagen2} style={{ width: '200px', height: '200px'}} alt="ccj" />
      </div>
    );
  }
}

export class PGPDF extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={imagen3} style={{ width: '850px', height: '60px'}} alt="pgpdf" />
      </div>
    );
  }
}