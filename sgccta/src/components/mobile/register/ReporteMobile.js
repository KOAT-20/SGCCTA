import React, { Component } from 'react';
import { MDBContainer, MDBInput, MDBCard, MDBCardBody } from 'mdbreact';
// Components
import BarAppMobile from './BarAppMobile.js';

class ReportMobile extends Component {
  
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
                  far icon="file-pdf"
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </div>
    );
  }
}

export default ReportMobile;