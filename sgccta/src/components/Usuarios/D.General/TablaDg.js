import React, { Component } from 'react';
import { 
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardHeader
  } from 'mdbreact';
// Components
import { getRegisterData } from '../../api/Register_api.js';
import Authorization from '../../accesUser';
import { table } from '../../utils/table.js';
import SearchingData from '../../Loading.js';

class TableDg extends Component {

	constructor (props) {
	    super (props);
	    this.access = new Authorization();
	    this.state = {
	    	table: {
	        	columns: [
		          	{
			            label: 'Cedula',
			            field: 'cedula',
			            sort: 'asc',
			            width: 200
		          	},
		          	{
			            label: 'Nombre',
			            field: 'nombre',
			            sort: 'asc',
			            width: 200
		          	},
		          	{
			            label: 'Apellido',
			            field: 'apellido',
			            sort: 'asc',
			            width: 200
		          	},
		          	{
			            label: 'Comunidad',
			            field: 'comunidad',
			            sort: 'asc',
			            width: 300
		          	},
		          	{
			            label: 'Tipo de Solicitud',
			            field: 'tipo_de_solicitud',
			            sort: 'asc',
			            width: 300
		          	},
		          	{
			            label: 'Monto Solicitado',
			            field: 'monto_solicitado',
			            sort: 'asc',
			            width: 500
		          	},
		          	{
		                label: 'Motivo',
		                field: 'monto_solicitado',
		                sort: 'asc',
		                width: 500 
		            },
	        	]
	      	},
	      consultas: [],
	      isLoaded: false
	    }
	}

	componentDidMount () {
		getRegisterData ()
    	.then(consultas => {
      		this.setState ({
        		consultas
      		}) 
      		console.log('getRegisterData: ',consultas);
      		let { table } = this.state;
      		if (consultas.consultas !== 'not found') {
      			table.rows = consultas.map(consulta => ({
			        cedula_solicitante : consulta.cedula_solicitante,
			        nombre_solicitante : consulta.nombre_solicitante,
			        apellido_solicitante : consulta.apellido_solicitante,
			        nombre_comunidad: consulta.nombre_comunidad,
			        tipo_solicitud: consulta.tipo_solicitud,
			        monto_solicitud: consulta.monto_solicitud,
			        descripcion: consulta.descripcion_motivo,
			       
      			})
      		);
    	}
    	this.setState({
      		table,
      		consultas,
      		isLoaded : true
    	})
      	console.log('rows: ', this.state)
    	})
  	}

  	handleReport(data) {
    console.log(data);
    this.props.history.replace('/Reporte',
    { solicitante_id : data })
  }

  	render () {
   		if (!this.state.isLoaded) {
      		return (
        		<div>
          			<MDBContainer style={{ width: "25rem", marginTop:'20%'}}>
            			<MDBCard>
              				<MDBCardBody>
                  				<SearchingData />
              				</MDBCardBody>
            			</MDBCard>
          			</MDBContainer>
        		</div>
      		) 
    	} else {
      		return (
        		<div>
		        	<MDBContainer style={{ width: "60rem"}}>
            			<MDBCard style={{marginTop:'5%'}}>
              				<MDBCardHeader className="h3 text-center py-4" color="mdb-color">
                				Solicitudes Resgistradas
              				</MDBCardHeader>
              				<MDBCardBody>
				                <div className="lista">
				                	{table(this.state.table)}
				                </div>
              				</MDBCardBody>
            			</MDBCard>
          			</MDBContainer>
        		</div>
      		);
    	}
  	}
}

export default TableDg;