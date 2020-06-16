import React, { Component } from 'react';
import { 
  MDBCard, 
  MDBCardBody,  
  MDBContainer, 
  MDBIcon, MDBInput, 
  MDBBtn, MDBModal, 
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from 'mdbreact';
import { BrowserRouter as Route, Link } from 'react-router-dom';
// Components
import BarAdminMobile from './BarAdminMobile.js';
import { addNewsAsistencia } from '../../../api/Employee_api.js';

class AdminAsisMobile extends Component {
  constructor () {
    super();
      this.state = {
        modal3: false,
        hora: " ",
        actividad: " "
      }
    }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
      this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  InsertAsis = (e) => {
        this.setState({
     [e.target.id]: e.target.value
   });
   console.log(e.target.id,': ',e.target.value);
    }

  InsertData = (e) => {
        e.preventDefault ();
        console.log (this.state)
        addNewsAsistencia(
            this.state.hora,
            this.state.actividad,
        ).then(result=>{
            console.log(result);
        });
    }
  
  render() {
    return (
      <div>
        <BarAdminMobile />
        <div style={{padding: 20}}>
        	<MDBContainer>
            <form onSubmit={this.InsertData}>
          		<MDBCard >
  			        <MDBCardBody>
  			        	<p className="h3 text-center py-4">
      					    <MDBIcon icon="user" size="2x" />
      					    <br/>
      					    ASISTENCIA
      					  </p>
                  <br/>
                  <div className="grey-text">
                    <MDBInput
                      label="Hora de Entrada"
                      icon="clock"
                      type="time"
                      id="hora"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.InsertAsis}
                    />
                    <MDBInput
                      label="Actividad a realizar"
                      icon="pencil-alt"
                      id="actividad"
                      type="textarea"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.InsertAsis}
                    />  
                  </div>
                  <div className="text-center">
                    <MDBBtn color="success" type="submit">
                      Guardar <MDBIcon icon="check" className="ml-1" />
                    </MDBBtn>
                    <MDBBtn color="mdb-color">
                      Reporte <MDBIcon far icon="file-pdf" className="ml-1" />
                    </MDBBtn>
                    <MDBBtn color="danger" onClick={this.toggle(3)}>
                      Cancelar <MDBIcon far icon="times-circle" className="ml-1" />
                    </MDBBtn>
                  </div>
                  <div>
                    <MDBModal isOpen={this.state.modal3} toggle={this.toggle(3)} size="sm">
                      <MDBModalHeader toggle={this.toggle(3)}>Mensaje</MDBModalHeader>
                      <MDBModalBody className="text-center">
                        Esta seguro que desea salir?
                      </MDBModalBody>
                      <MDBModalFooter>
                        <MDBBtn color="danger" size="sm" onClick={this.toggle(3)}>NO</MDBBtn>
                        <Link to='/Admin'>
                          <MDBBtn color="primary" size="sm">SI</MDBBtn>
                        </Link>
                      </MDBModalFooter>
                    </MDBModal>
                  </div>
  			        </MDBCardBody>
  			      </MDBCard>
            </form>
        	</MDBContainer>
        </div>	
      </div>
    );
  }
}

export default AdminAsisMobile;