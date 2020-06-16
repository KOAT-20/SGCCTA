import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { 
  MDBCardHeader, 
  MDBCardFooter, 
  MDBBtn, 
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBIcon,
  MDBModalFooter
} from 'mdbreact';
// Components
import BarAdmin from './BarAdmin.js';
import FormUser from './FormUser.js';
import { 
  getRegisterEmployee,
  deleteRegisterEmployee, 
  deleteRegisterUser 
} from '../../api/User_api.js';
import SearchingData from '../../Loading.js';
import Authorization from '../../accesUser';

class Table extends Component {
  constructor (props) {
    super (props);
      this.access = new Authorization();
      this.state = {
        empleados: [],
        usuarios: [],
        isLoaded: false,
        modal1: true
      }
    this.handleAddUsers = this.handleAddUsers.bind(this);
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
      this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  componentWillMount () {
    getRegisterEmployee ()
    .then (empleados => {
      this.setState ({
        empleados,
        isLoaded : true
      })
    })
  }
    
  handleAddUsers (empleado) {
    this.setState ({
      empleados: [...this.state.empleados, empleado]
    });
  }

  handleRemoveEmployees (index, index2) {
    console.log (index)
    if (window.confirm('Esta seguro(a) de eliminar este usuario?')){
      deleteRegisterEmployee (index)
      .then (result => {
        deleteRegisterUser (index2)
          .then (result => {
            console.log ('Usuario eliminado')
          })
        console.log ('Empleado eliminado')
        alert('Usuario eliminado');
      })
      this.setState ({
        empleados: this.state.empleados.filter((e, i) => {
          return i !== index
        })
      })
    }
  }
	
  render() {
    if (!this.state.isLoaded) {
      return (
        <div>
        <BarAdmin />
          <MDBContainer style={{ width: "25rem", marginTop:50}}>
            <MDBCard>
              <MDBCardBody>
                <div>
                  <SearchingData />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      ) 
    } else {
      const data = this.state.empleados.map((empleado) => {
        return (
          <div className="col-md-4" key={empleado.empleado_id}>
            <div className="card mt-4">
              <MDBCardHeader className="h3 text-center py-4" color="mdb-color">
                Usuario
              </MDBCardHeader>
              <div className="card-body text-center">
                <p>{empleado.nombre_empleado}</p>
                <p>{empleado.apellido_empleado}</p>
                <p>{empleado.correo}</p>
                <p>{empleado.clave}</p>
                <span><b>{empleado.cargo}</b></span>
              </div>
              <div className="text-center">
                <MDBCardFooter className="card-footer" color="mdb-color">
                  <MDBBtn color="danger" size="sm" onClick={this.handleRemoveEmployees.bind(this, empleado.empleado_id, empleado.usuario_id)}>
                    Remover
                  </MDBBtn>
                </MDBCardFooter>
              </div>
            </div>
          </div>
        )
      });
  		return ( 
     		<div>
          <FormUser onAddUser={this.handleAddUsers} />
          <div>
            <MDBContainer>
              <MDBCardHeader className="text-center" tag="h4" color="mdb-color">
                Usuarios Registrados
                <span className="badge badge-pill badge-primary ml-2">
                  {this.state.empleados.length}
                </span>
              </MDBCardHeader>
            </MDBContainer>
          </div>
          <br/>
          <div className="container">
            <div className="row">
              {data}
            </div>
          </div>
       	</div>
      );
    }
  }
}

export default Table;