import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import {
	MDBContainer,
	MDBIcon,
	MDBInput,
	MDBCard,
	MDBCardBody,
	MDBCardHeader,
	MDBRow,
	MDBBtn,
	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBModalFooter
} from 'mdbreact';
// Components
import BarApp from './BarApp.js';
import { 
	getSpecificData,
	updateDataSlc,
	updateDataMot,
	updateDataCom } from '../api/Register_api.js';
import Authorization from '../accesUser';

class Modify extends Component {
	constructor (props) {
    	super (props);
    	this.access = new Authorization();
    	this.state = {
      		modal1: false,
        	modal2: false,
        	iduser: ' ',
        	nombre: " ",
	        apellido: " ",
	        cedula: " ",
	        edad: " ",
	        numero_telefono: " ",
	        correo: " ",
	        nombre_comunidad: " ",
	        estado_comunidad: " ",
	        municipio_comunidad: " ",
	        parroquia_comunidad: " ",
	        codigo_postal: " ",
	        monto_motivo: " ",
	        motivo: " ",
	        tipo_motivo: [], 
    	}
  	}

	componentDidMount () {
    getSpecificData (this.props.history.location.state.solicitante_id)
    .then(consultas => {
    	console.log (consultas)
      this.setState ({
        nombre: consultas[0].nombre_solicitante,
        apellido: consultas[0].apellido_solicitante,
        cedula: consultas[0].cedula_solicitante,
        edad: consultas[0].edad_solicitante,
        numero_telefono: consultas[0].telefono_solicitante,
        correo: consultas[0].correo_solicitante,
        nombre_comunidad: consultas[0].nombre_comunidad,
        estado_comunidad: consultas[0].estado_comunidad,
        municipio_comunidad: consultas[0].municipio_comunidad,
        parroquia_comunidad: consultas[0].parroquia_comunidad,
        codigo_postal: consultas[0].codigo_postal,
        monto_motivo: consultas[0].monto_solicitud,
        motivo: consultas[0].descripcion_motivo,
        tipo_motivo: consultas[0].tipo_solicitud,
        idslc: consultas[0].solicitante_id,
        idcom: consultas[0].comunidad_id,
        idmot: consultas[0].motivo_id
      })
      console.log (this.state)
    })
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
      this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  handleSubmit = (e) => {
  	e.preventDefault ();
  	updateDataSlc (
  		this.state.idslc,
  		this.state.nombre,
  		this.state.apellido,
  		this.state.cedula,
  		this.state.edad,
  		this.state.numero_telefono,
  		this.state.correo,
  	).then (result => {
  		console.log(result)
  		updateDataCom (
  			this.state.idcom,
	  		this.state.nombre_comunidad,
	  		this.state.estado_comunidad,
	  		this.state.municipio_comunidad,
	  		this.state.parroquia_comunidad,
	  		this.state.codigo_postal,
  		).then (result2 => {
  			updateDataMot (
  				this.state.idmot,
  				this.state.monto_motivo ,
  				this.state.motivo ,
  				this.state.tipo_motivo
  			).then (result3 => {
  				console.log ('Datos actualizados')
  			})
  		})
  	}) 
  }

  handleChange = event => {
   this.setState({
     [event.target.name]: event.target.value
   });
   console.log(event.target.name,': ',event.target.value);
 }

	render () {
		
      	return (
        	<div>
        	<form onSubmit={this.handleSubmit}>
        		<MDBContainer>
        			<MDBRow style={{margin:'center'}}>
						<MDBCard style={{ width:"25rem", marginTop:'3%', marginLeft:'5%'}}>
							<MDBCardHeader className="text-center" color="mdb-color">
								<h3>
									<b>DATOS SOLICITANTE</b>
									<MDBIcon icon="edit" className="green-text pr-3 ml-3" />
								</h3>
							</MDBCardHeader>
							<MDBCardBody>
								<div className="slc">
									<MDBInput name="nombre" label={this.state.nombre} onChange={this.handleChange}/>
									<MDBInput name="apellido" label={this.state.apellido} onChange={this.handleChange}/>
									<MDBInput name="cedula"  label={this.state.cedula} onChange={this.handleChange}/>
									<MDBInput name="edad"  label={this.state.edad} onChange={this.handleChange}/>
									<MDBInput name="numero_telefono"  label={this.state.numero_telefono} onChange={this.handleChange}/>
									<MDBInput name="correo"  label={this.state.correo} onChange={this.handleChange}/>
								</div>
							</MDBCardBody>
						</MDBCard>

						<MDBCard style={{ width:"25rem", marginTop:'3%', marginLeft:'5%'}}>
							<MDBCardHeader className="text-center" color="mdb-color">
								<h3>
									<b>DATOS COMUNIDAD</b>
									<MDBIcon icon="edit" className="green-text pr-3 ml-3" />
								</h3>
							</MDBCardHeader>
							<MDBCardBody>
								<div className="com">
									<MDBInput name="nombre_comunidad"  label={this.state.nombre_comunidad} onChange={this.handleChange}/>
									<MDBInput name="estado_comunidad"  label={this.state.estado_comunidad} onChange={this.handleChange}/>
									<MDBInput name="municipio_comunidad"  label={this.state.municipio_comunidad} onChange={this.handleChange}/>
									<MDBInput name="parroquia_comunidad"  label={this.state.parroquia_comunidad} onChange={this.handleChange}/>
									<MDBInput name="codigo_postal"  label={this.state.codigo_postal} onChange={this.handleChange}/>
								</div>
							</MDBCardBody>
						</MDBCard>
					</MDBRow>
				</MDBContainer>
				<MDBContainer>
					<MDBRow style={{margin:'center'}}>
						<MDBCard style={{ width:"25rem", marginTop:'3%', marginLeft:'5%'}}>
							<MDBCardHeader className="text-center" color="mdb-color">
								<h3>
									<b>MOTIVO DE SOLICITUD</b>
									<MDBIcon icon="edit" className="green-text pr-3 ml-3" />
								</h3>
							</MDBCardHeader>
							<MDBCardBody>
								<div className="mot">
									<MDBInput name="monto_motivo"  label={this.state.monto_motivo} onChange={this.handleChange}/>
									<MDBInput name="motivo"  label={this.state.motivo} onChange={this.handleChange}/>
									<MDBInput name="tipo_motivo"  label={this.state.tipo_motivo} onChange={this.handleChange}/>
								</div>
							</MDBCardBody>
						</MDBCard>

						<MDBCard style={{ width:"25rem", marginTop:'3%', marginLeft:'5%'}}>
							<MDBCardHeader className="text-center" color="mdb-color">
								<h3>
									<b>EJECUTAR</b>
									<MDBIcon icon=" " className="green-text pr-3 ml-3" />
								</h3>
							</MDBCardHeader>
							<MDBCardBody>
								<div className="text-center" style={{marginTop:50}}>
				                  <MDBBtn color="success" type="submit" size="lg" onClick={this.toggle(1)}>
				                    Actualizar <MDBIcon icon="check" className="ml-2" />
				                  </MDBBtn>
				                  <MDBBtn color="danger" size="lg" onClick={this.toggle(2)}>
				                    Cancelar <MDBIcon far icon="times-circle" className="ml-2" />
				                  </MDBBtn>
				                </div>
				                <div>
				                  <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg">
				                    <MDBModalHeader toggle={this.toggle(1)}>MENSAJE</MDBModalHeader>
				                      <MDBModalBody className="text-center">
				                        <h3>Solicitud actulizada con exito</h3>
				                         <MDBIcon far icon="check-circle" className="green-text pr-3 ml-1" size="3x"/>
				                      </MDBModalBody>
				                    <MDBModalFooter>
				                      <Link to='/Recepcion'>
				                        <MDBBtn color="success" size="sm">OK</MDBBtn>
				                      </Link>
				                    </MDBModalFooter>
				                  </MDBModal>
				                </div>
				                <div>
				                  <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="lg">
				                    <MDBModalHeader toggle={this.toggle(2)}>ATENCIÓN</MDBModalHeader>
				                      <MDBModalBody className="text-center">
				                        <h3>Esta seguro que desea cancelar la actualización?</h3>
				                        <MDBIcon far icon="times-circle" className="red-text pr-3 ml-2" size="3x"/>
				                      </MDBModalBody>
				                    <MDBModalFooter>
				                      <MDBBtn color="danger" size="sm" onClick={this.toggle(2)}>NO</MDBBtn>
				                      <Link to='/Recepcion'>
				                        <MDBBtn color="primary" size="sm">SI</MDBBtn>
				                      </Link>
				                    </MDBModalFooter>
				                  </MDBModal>
				                </div>
							</MDBCardBody>
						</MDBCard>
					</MDBRow>
				</MDBContainer>
				</form>
        	</div>
      	)
		
	}
}

export default Modify;
