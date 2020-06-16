import React, { Component } from 'react';
//Components
import BarAdmin from './BarPre.js';
import TablaSlc from './TablaSolicitudes.js';
import Authorization from '../../accesUser';

class Pre extends Component {
	constructor () {
		super ();
		this.access = new Authorization();
	}
  	
  	render() {
    	return (
        	<div>
	           <BarAdmin />
	           <TablaSlc />
        	</div>
    	);
  	}
}
export default Pre;