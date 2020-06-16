import React, { Component } from "react";
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { MDBContainer, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
// Components
import BarAppMobile from './BarAppMobile.js';
import SearchingData from '../../Loading.js';

class SearchMobile extends Component {

  render() {
    return (
      <div>
        <BarAppMobile/>
        <div style={{padding: 20}}>
            <MDBContainer>
              <MDBCard>
                <MDBCardBody>
                  <MDBInput
                    label="Número de referencia"
                    icon="search"
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <div className="text-center">
                    <MDBBtn color="primary" type="submit" size="sm">
                        MODIFICAR
                    </MDBBtn>
                    <MDBBtn color="deep-orange" type="submit" size="sm">
                        ELIMINAR
                    </MDBBtn>
                    <Link to='/Home'>
                      <MDBBtn color="danger" size="sm">
                          CANCELAR
                      </MDBBtn>
                    </Link>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
            <br/>
            <MDBContainer>
              <MDBCard>
                <MDBCardBody>
                  <SearchingData />
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </div>
        </div>
    );
  }
}

export default SearchMobile;