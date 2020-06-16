import React, { Component } from 'react';
import { MDBContainer, MDBFooter } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      <MDBFooter className="font-small pt-4 mt-4">
        <div className="footer-copyright text-center py-3">
          <MDBContainer className="text-white"  fluid>
            &copy; {new Date().getFullYear()} Copyright: <a> Alvarez.K - Farías.H - Torrealba.J </a>
          </MDBContainer>
        </div>
      </MDBFooter>
    );
  }
}

export default Footer;
