import React, { Component } from 'react';
import { 
	MDBContainer, 
	MDBCard, 
	MDBCardBody,
	MDBRow,
	MDBIcon
} from 'mdbreact';
import {
	XYPlot,  
	VerticalGridLines,
	HorizontalGridLines,
	XAxis, YAxis, 
	VerticalBarSeries,
	LineSeries
} from 'react-vis';
// Components
import cyt from '../images/cyt.png';
import BarApp from './BarApp.js';
import '../../../node_modules/react-vis/dist/style.css';
import { 
  getRegisterData 
} from '../api/Register_api.js';
//import Estd from './Estadisticas.js';
import Authorization from '../accesUser'; 

class Home extends Component { 
	constructor (props) {
		super (props)
		this.access = new Authorization();
		this.state = {
			results: []
		};
	}

	componentWillMount () {
		getRegisterData ()
		.then (results => {
			this.setState ({
				results
			})
		})
	}

	render () {
		const data = [
			{x: 'Ene', y: 0},
			{x: 'Feb', y: 0},
			{x: 'Mar', y: 0},
			{x: 'Abr', y: 2},
			{x: 'May', y: 0},
			{x: 'Jun', y: 0},
			{x: 'Jul', y: 0},
			{x: 'Ago', y: 0},
			{x: 'Sep', y: 0},
			{x: 'Oct', y: 0},
			{x: 'Nov', y: 0},
			{x: 'Dic', y: 0},
		]
		return (
			<div>
    		<BarApp />
    			<div>
	    			<MDBContainer style={{ width: "60rem" }}>
		    			<MDBCard style={{marginTop: '5%'}}>
			    			<MDBCardBody>
			    				<MDBRow>
				    				<XYPlot xType="ordinal" height={300} width= {700}>
										<VerticalGridLines />
										<HorizontalGridLines />
										<XAxis title="Meses"/>
										<YAxis title="N° Solicitudes"/> 
										<VerticalBarSeries 
										data={data} 
										/>
									</XYPlot>
									<div style={{marginLeft:'2%'}}>
										<b>LEYENDA</b><br/><br/>
										<div>
											<MDBIcon icon="circle" /> Solicitudes registradas
										</div>
									</div>
								</MDBRow>
			    			</MDBCardBody>
			    		</MDBCard>
			    	</MDBContainer>
				</div>
    		</div>
		); 
	}
}
export default Home;