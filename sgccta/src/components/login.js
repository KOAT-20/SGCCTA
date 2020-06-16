import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import Authorization from './accesUser';
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from 'mdbreact';

class Login extends Component {
  constructor (props) {
    super(props);
      this.access = new Authorization();
      this.state = {
        modal1: false,
        correo: "",
        clave: " "
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    console.log(event.target.id,': ',event.target.value);
  };


  toggle = nr => () => {
    let modalNumber = 'modal' + nr
      this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

async  handleSubmit(e) {
    e.preventDefault();
   await  this.access.AuthLogin(this.state.correo, this.state.clave, this.props)
  }

  render() {
    return (
      <div>
        <MDBContainer style={{ width: "40rem" }}>
            <MDBCard style={{marginTop: '15%'}}>
            <form onSubmit={this.handleSubmit}>
              <MDBCardBody>
                <p className="h3 text-center py-4">
                  <MDBIcon icon="user" size="2x" />
                  <br/>
                  INICIO DE SESIÓN
                </p>
                  <div className="grey-text">
                    <MDBInput
                      id="correo"
                      label="Correo"
                      icon="envelope"
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      id="clave"
                      label="Contraseña"
                      icon="lock"
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="text-center">
                  <MDBBtn color="primary" type="submit">
                    Ingresar
                  </MDBBtn>
              </div>
              </MDBCardBody>
            </form>
            <br/>
            <div className="text-center">
              <a href="#" onClick={this.toggle(1)}>
                ¿Olvido su Contraseña?
              </a>
            </div>
            <br/>
          </MDBCard>
      </MDBContainer>
      <div>
        <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg">
          <MDBModalHeader toggle={this.toggle(1)}>MENSAJE</MDBModalHeader>
            <MDBModalBody className="text-center">
              <h3>Por favor, dirijase con su adminitrador</h3>
            </MDBModalBody>
          <MDBModalFooter>
            <Link to="/">
              <MDBBtn color="success" onClick={this.toggle(1)}>Aceptar</MDBBtn>
            </Link>
          </MDBModalFooter>
        </MDBModal>
      </div>
    </div>
    );
  }
}

export default Login;
