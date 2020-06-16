import React, { Component } from 'react';
//Components
import BarAdminMobile from './BarAdminMobile.js';
import InitMobile from './InicioMobile.js'; 

class AdminMobile extends Component {
  render() {
    return (
        <div>
         	<BarAdminMobile />
         	<InitMobile />
        </div>
    );
  }
}
export default AdminMobile;