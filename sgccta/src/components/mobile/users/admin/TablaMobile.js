import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { 
	MDBContainer,
	MDBCard, 
	MDBCardBody, 
	MDBCardHeader, 
	MDBTable, 
	MDBTableBody, 
	MDBTableHead,
  MDBBtn, MDBIcon,
  MDBInput  
} from 'mdbreact';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// Components
import BarAdminMobile from './BarAdminMobile.js';
import { addNewsUsers, passLoginAccess } from '../../../api/User_api.js'

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

class TableMobile extends Component {
  constructor () {
      super();
        this.state = {
          nombre_empleado: " ",
          apellido_empleado: " ",
          correo_empleado: " ",
          clave_login: " ",
          cargo_empleado: []
      }
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

  InsertDataEmp = (e) => {
    e.preventDefault ();
    console.log (this.state)
    addNewsUsers(
        this.state.nombre_empleado,
        this.state.apellido_empleado,
        this.state.correo_empleado,
        this.state.cargo_empleado
    ).then(result=>{
        console.log(result);
    });
    passLoginAccess(
        this.state.clave_login
    ).then(result=>{
        console.log(result);
    });
  }

	render() {
    const { classes } = this.props;
		const data_panel = {
    columns: [
      {
        'label': <a className="text-white">Nombre</a>,
        'field': 'first',
        'sort': 'asc'
      },
      {
        'label': <a className="text-white">Apellido</a>,
        'field': 'last',
        'sort': 'asc'
      },
      {
        'label': <a className="text-white">Correo</a>,
        'field': 'email',
        'sort': 'asc'
      },
      {
        'label': <a className="text-white">Tipo de Cargo</a>,
        'field': 'position',
        'sort': 'asc'
      },
      {
        'label': ' ',
        'field': 'aproved',
        'sort': 'asc'
      },
      {
        'label': ' ',
        'field': 'button2',
        'sort': 'asc'
      }
    ],
    rows: [
      {
        'first': 'Mark',
        'last': 'Otto',
        'email': '@mdo',
        'position': 'Mark',
        'aproved': <MDBBtn color="success" size="sm">Aprobar</MDBBtn>,
        'button2': <MDBBtn color="danger" size="sm">Remover</MDBBtn>
      },
      {
        'first': 'Jacob',
        'last': 'Thornton',
        'email': '@fat',
        'position': 'Jacob',
        'aproved': <MDBBtn color="success" size="sm">Aprobar</MDBBtn>,
        'button2': <MDBBtn color="danger" size="sm">Remover</MDBBtn>
      }
    ]
  };
		return ( 
   			<div>
        	<BarAdminMobile />
        		<MDBContainer style={{marginTop:20}}>
        			<MDBCard narrow>
      					<MDBCardHeader tag="h4" className="text-center font-weight-bold text-uppercase py-4" color="mdb-color">
        					Registro de Usuario
      					</MDBCardHeader>
                <MDBCardBody>
                  <form  onSubmit={this.InsertDataEmp}>
                    <MDBInput
                      label="Nombre"
                      icon="user"
                      id="nombre_empleado"
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.InsertEmp}
                    />
                    <MDBInput
                      label="Apellido"
                      icon="user"
                      id="apellido_empleado"
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.InsertEmp}
                    />
                    <MDBInput
                      label="Correo"
                      icon="envelope"
                      id="correo_empleado"
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.InsertEmp}
                    />
                    <MDBInput
                      label="Contraseña"
                      icon="lock"
                      type="password"
                      id="clave_login"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.InsertEmp}
                  />
                    <div className="text-center">
                      <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="cargo_empleado">Tipo de Cargo</InputLabel>
                        <Select 
                          style={{ width: "10rem"}}
                          value={this.state.cargo_empleado}
                          onChange={this.handleChange}
                          inputProps={{
                            name: 'cargo_empleado',
                            id: 'cargo_empleado',
                          }}
                        >
                        <MenuItem value="">
                            <em>Ninguno</em>
                          </MenuItem>
                          <MenuItem value="Administrador">Administrador</MenuItem>
                          <MenuItem value="Dirección General">Dirección General</MenuItem>
                          <MenuItem value="Empleado">Empleado</MenuItem>
                          <MenuItem value="Presidencia">Presidencia</MenuItem>
                          <MenuItem value="Recepcionista">Recepcionista</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className="text-center">
                      <MDBBtn style={{marginTop:25}} type="submit" color="mdb-color" size="sm"> 
                        <MDBIcon icon="plus-square" size="2x" /> 
                      </MDBBtn>
                    </div>
                  </form>
                  <br/>
                  <MDBTable btn fixed>
                    <MDBTableHead color="mdb-color" columns={data_panel.columns} />
                    <MDBTableBody rows={data_panel.rows} />
                  </MDBTable>
      					</MDBCardBody>
    				</MDBCard> 
    			</MDBContainer>
     		</div>
    	);
  	}
  }
TableMobile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableMobile);