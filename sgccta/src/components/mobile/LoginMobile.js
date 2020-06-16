import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { MDBContainer, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBRow } from 'mdbreact';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

class LoginMobile extends Component {
  render() {
    return ( 
      <div style={{marginTop:20}}>
        <MDBContainer style={{ width: "20rem" }}>
          <form>
            <MDBCard>
              <MDBCardBody>
                <p className="h5 text-center py-4">
                  <MDBIcon icon="user" size="2x" />
                  <br/>
                  LOG IN
                </p>
                <div className="grey-text">
                    <MDBInput
                        label="Email"
                        icon="envelope"
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBInput
                        label="Password"
                        icon="lock"
                        type="password"
                        validate
                        error="wrong"
                        success="right"
                    />
                    <MDBRow style={{marginLeft:2}}>
                    <MDBIcon
                      icon="user-check"
                      size="2x"
                    />
                  <div>
                    <FormControl>
                      <InputLabel htmlFor="cargo_empleado">Tipo de Cargo</InputLabel>
                      <Select
                        className="btn-group mr-2" 
                        style={{ width: "16rem"}}
                        inputProps={{
                        name: 'cargo_empleado',
                        id: 'cargo_empleado',
                        }}>
                        <MenuItem value="Administrador">Administrador</MenuItem>
                        <MenuItem value="Dirección General">Dirección General</MenuItem>
                        <MenuItem value="Empleado">Empleado</MenuItem>
                        <MenuItem value="Presidencia">Presidencia</MenuItem>
                        <MenuItem value="Recepcionista">Recepcionista</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </MDBRow>  
                </div>
              </MDBCardBody>
              <div className="text-center">
                <Link to="/Empleado">
                  <MDBBtn color="primary" type="submit">
                    Enter
                  </MDBBtn>
                </Link>
              </div>
              <br/>
            </MDBCard>
          </form>
        </MDBContainer>   
      </div>
    );
  }
}

export default LoginMobile;