import React, { Component } from 'react';
//Components
import BarDg from './BarDg.js';
import TableDg from './TablaDg';
import Authorization from '../../accesUser';

class Dgeneral extends Component {
	constructor () {
		super ();
		this.access = new Authorization();
	}
  
  	render() {
    	return (
        	<div>
           		<BarDg />
           		<TableDg />
        	</div>
    	);
  	}
}
export default Dgeneral;