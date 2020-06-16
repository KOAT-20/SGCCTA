import React, { Component } from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Components
import Login from './login.js';
import Home from './Register/Home.js';
import Form from './Register/Formulario.js';
import Search from './Register/Consulta.js';
import Modify from './Register/Modificar.js';
import Report from './Register/Reporte.js';
import Admin from './Usuarios/admin/Admin.js';
import Table from './Usuarios/admin/Tabla.js';
import Pre from './Usuarios/presidencia/Presidencia.js';
import Dgneral from './Usuarios/D.General/Dg.js'
// Copmponents Mobile
import LoginMobile from './mobile/LoginMobile.js';
import HomeMobile from './mobile/register/HomeMobile.js';
import FormMobile from './mobile/register/FormularioMobile.js';
import SearchMobile from './mobile/register/ConsultaMobile.js';
import ReportMobile from './mobile/register/ReporteMobile.js';
import AdminMobile from './mobile/users/admin/AdminMobile.js';
import TableMobile from './mobile/users/admin/TablaMobile.js';

class RouterMain extends Component {
  render() {
    if (isWidthUp('sm', this.props.width)) {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Recepcion" component={Home} />
              <Route exact path="/Formulario" component={Form} />
              <Route exact path="/Consulta" component={Search} />
              <Route exact path="/Modificar" component={Modify} />
              <Route exact path="/Reporte" component={Report} />
              <Route exact path="/Admin" component={Admin} />
              <Route exact path="/RegistroUsuario" component={Table} />
              <Route exact path="/Presidencia" component={Pre} />
              <Route exact path="/DireccionGeneral" component={Dgneral} />
            </Switch>
          </div>
        </Router>
      );
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LoginMobile} />
            <Route exact path="/Recepcion" component={HomeMobile}/>
            <Route exact path="/Formulario" component={FormMobile} />
            <Route exact path="/Consulta" component={SearchMobile} />
            <Route exact path="/Reporte" component={ReportMobile} />
            <Route exact path="/Admin" component={AdminMobile} />
            <Route exact path="/RegistroUsuario" component={TableMobile} />
          </Switch>
        </div>
      </Router>
    );
  }
}
export default withWidth()(RouterMain);