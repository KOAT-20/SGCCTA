import React, { Component } from 'react';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { MDBContainer, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from 'mdbreact';

class InitMobile extends Component {
  render() {
    return ( 
      <div>
        <div style={{marginTop: 20}}>
          	<MDBContainer>
            	<MDBCard>
                	<MDBCardBody>
		                <p className="h3 text-center py-4">
		                	<MDBIcon icon="user" size="3x" />
		                </p>
		                <div className="text-center">
                  			<p className="h3 text-center py-4">
                   				NOMBRE DE USUARIO
                  			</p>
			                <p className="h3 text-center py-4">
			                    CARGO DE USUARIO
			                </p>
                		</div>
                		<br/>
                		<div className="text-center">
                  			<Link to='/RegistroUsuario'>
                    			<MDBBtn color="success" size="lg">
                        			Gestionar Usuario
                    			</MDBBtn>
                  			</Link>
                		</div>
                	</MDBCardBody>
            	</MDBCard>
            </MDBContainer>   
        </div>
      </div>
    );
  }
}

export default InitMobile;