import React, { Component } from 'react';
//Components
import BarAdmin from './BarAdmin.js';
import Table from './Tabla.js';
import Authorization from '../../accesUser'; 

class Admin extends Component {
	constructor (props) {
		super (props);
		this.access = new Authorization();
	}
  render() {
    return (
      <div>
        <BarAdmin />
        <Table />
      </div>
    );
  }
}
export default Admin;