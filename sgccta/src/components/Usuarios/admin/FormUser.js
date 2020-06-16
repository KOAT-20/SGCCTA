import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import {
	MDBContainer,
	MDBCard,
	MDBCardBody,
	MDBCardHeader,
  	MDBBtn, MDBIcon,
  	MDBInput, MDBRow,
  	MDBModal,
	MDBModalHeader,
	MDBModalBody,
	MDBModalFooter
} from 'mdbreact';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { BrowserRouter as Route, Link } from 'react-router-dom';
// Components
import { addNewsUsers, passLoginAccess , getRolsUsers } from '../../api/User_api.js'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class FormUser extends Component {
	constructor () {
		super ();
		this.state = {
			nombre_empleado: " ",
         	apellido_empleado: " ",
          	correo: " ",
          	clave: " ",
          	cargo: [],
        	modal1: false,
			roles: []
		}
		this.InsertEmp = this.InsertEmp.bind(this);
    	this.InsertDataEmp = this.InsertDataEmp.bind(this);
	}

	componentWillMount() {
		getRolsUsers()
		.then(result => {
			const roles = result.map(rol => ({
				ID : rol.rol_id,
				label: rol.cargo
			}))
			this.setState({
				roles
			})
			console.log(roles);
		})
	}

	toggle = nr => () => {
    	let modalNumber = 'modal' + nr
      		this.setState({
      		[modalNumber]: !this.state[modalNumber]
    	});
  	}

	handleChange = event => {
    	this.setState({
      		[event.target.name]: event.target.value
    	});
    console.log(event.target.name,': ',event.target.value);
  	};

  	InsertEmp = (e) => {
    	this.setState({
     		[e.target.id]: e.target.value
   		});
   	console.log(e.target.id,': ',e.target.value);
  	}

	InsertDataEmp = async (e) => {
		e.preventDefault ();
		this.props.onAddUser (this.state);
		console.log (this.state)
		await passLoginAccess (
			this.state.correo,
	        this.state.clave
		).then (usuario => {
			console.log (usuario);
			addNewsUsers (
				this.state.nombre_empleado,
		        this.state.apellido_empleado,
		        usuario.usuario_id,
				this.state.cargo,
			).then (result => {
				console.log (result);
			});
		});
	}

  	render () {
  		const { classes } = this.props;
  		return (
  			<div>
  				<MDBContainer style={{marginTop:55}}>
        			<MDBCard narrow>
      					<MDBCardHeader tag="h4" className="text-center font-weight-bold text-uppercase py-4" color="mdb-color">
        					Registro de Usuario
      					</MDBCardHeader>
                		<MDBCardBody cascade>
                  			<form className={classes.root} onSubmit={this.InsertDataEmp}>
                    			<MDBRow style={{marginLeft:20}}>
				                    <MDBInput
				                        className="btn-group mr-2"
				                        label="Nombre"
				                        icon="user"
				                        id="nombre_empleado"
				                        type="text"
				                        validate
				                        error="wrong"
				                        success="right"
				                        style={{ width: "10rem"}}
				                        onChange={this.InsertEmp}
				                    />
			                        <MDBInput
				                        className="btn-group mr-2"
				                        label="Apellido"
				                        id="apellido_empleado"
				                        type="text"
				                        validate
				                        error="wrong"
				                        success="right"
				                        style={{ width: "10rem"}}
				                        onChange={this.InsertEmp}
			                        />
				                    <MDBInput
				                        className="btn-group mr-2"
				                        label="Correo"
				                        icon="envelope"
				                        id="correo"
				                        type="text"
				                        validate
				                        error="wrong"
				                        success="right"
				                        style={{ width: "10rem"}}
				                        onChange={this.InsertEmp}
				                    />
				                    <MDBInput
				                        className="btn-group mr-2"
				                        label="Contraseña"
				                        icon="lock"
				                        type="password"
				                        id="clave"
				                        validate
				                        error="wrong"
				                        success="right"
				                        style={{ width: "8rem"}}
				                        onChange={this.InsertEmp}
                    				/>
                      				<div>
                        				<FormControl className={classes.formControl}>
                          					<InputLabel htmlFor="cargo_empleado">
												Tipo de Cargo
											</InputLabel>
                      						<Select
                        						className="btn-group mr-2"
					                            style={{ width: "9rem", marginTop: 23}}
					                            value={this.state.cargo}
					                            onChange={this.handleChange}
					                            inputProps={{
					                              name: 'cargo',
					                              id: 'cargo',
					                            }}
					                        >
					                            <MenuItem value="">
					                              <em>Ninguno</em>
					                            </MenuItem>
												{this.state.roles.map(rol => (
													<MenuItem key={rol.ID} value={rol.ID}>{rol.label}</MenuItem>
												))}
                      						</Select>
                        				</FormControl>
                      				</div>
				                    <div>
				                        <MDBBtn style={{marginTop:25, marginLeft:20}} type="submit" color="mdb-color" size="sm" onClick={this.toggle(1)}>
				                         	<MDBIcon icon="plus-square" size="2x" />
				                        </MDBBtn>
				                    </div>
                    			</MDBRow>
                  			</form>
      					</MDBCardBody>
    				</MDBCard>
    				<div>
                  		<MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg">
                    		<MDBModalHeader toggle={this.toggle(1)}>MENSAJE</MDBModalHeader>
	                    	<MDBModalBody className="text-center">
	                        	<h3>Usuario registrado con exito</h3>
	                         	<MDBIcon far icon="check-circle" className="green-text pr-3 ml-1" size="3x"/>
	                      	</MDBModalBody>
                			<MDBModalFooter>
                				<Link to="/Admin" refresh="true">
                    				<MDBBtn color="primary" onClick={this.toggle(1)}>Aceptar</MDBBtn>
                				</Link>
                			</MDBModalFooter>
                  		</MDBModal>
                	</div>
    			</MDBContainer>
    		</div>
  		)
  	}
}
FormUser.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormUser);
