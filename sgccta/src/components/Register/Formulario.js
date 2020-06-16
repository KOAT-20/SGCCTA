// Dependencies
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { 
  MDBContainer, 
  MDBInput, MDBBtn, 
  MDBCard, MDBCardBody, 
  MDBIcon, MDBRow,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter,
  MDBCardHeader
} from 'mdbreact';
import BarApp from './BarApp.js';
import { addRegisterSlc, addRegisterCom, addReason } from '../api/Register_api';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
// Components
import Authorization from '../accesUser';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Form extends Component {
  constructor (props) {
    super(props);
      this.access = new Authorization();
      this.state = {
        nombre: " ",
        apellido: " ",
        cedula: " ",
        edad: " ",
        numero_telefono: " ",
        correo: " ",
        nombre_comunidad: " ",
        estado_comunidad: " ",
        municipio_comunidad: " ",
        parroquia_comunidad: " ",
        codigo_postal: " ",
        monto_motivo: " ",
        motivo: " ",
        tipo_motivo: [],
        modal1: false,
        modal2: false 
    }
  }

  toggle = nr => () => {
    let modalNumber = 'modal' + nr
      this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  }

  handleChange = event => {
    this.setState({ 
      [event.target.name]: event.target.value
    });
    console.log(event.target.name,': ',event.target.value);
  };

  InsertSolict = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e.target.id,': ',e.target.value);
  };

  InsertCom = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e.target.id,': ',e.target.value);
  }

  InsertRs = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(e.target.id,': ',e.target.value);
  }

  InsertData = async(e) => {
    e.preventDefault ();
    console.log (this.state)
    await addRegisterCom(
      this.state.nombre_comunidad,
      this.state.estado_comunidad,
      this.state.municipio_comunidad,
      this.state.parroquia_comunidad,
      this.state.codigo_postal,
      ).then(comunidad => {
        console.log(comunidad);
        addReason(
          this.state.monto_motivo,
          this.state.motivo,
          this.state.tipo_motivo
        ).then(motivo => {
          console.log(motivo);
          addRegisterSlc(
            this.state.nombre,
            this.state.apellido,
            this.state.cedula,
            this.state.edad,
            this.state.numero_telefono,
            this.state.correo,
            comunidad.comunidad_id,
            motivo.motivo_id
            ).then(result => {
              console.log(result);
          });
        });
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <BarApp />
        <MDBContainer style={{marginTop:20, width: "45rem"}}>
          <form onSubmit={this.InsertData}>
            <MDBCardHeader className="text-center" color="mdb-color">
              <h3>
                <b>Solicitante</b>
                <MDBIcon icon="user" className="ml-3" />
              </h3>
            </MDBCardHeader>
            <MDBCard>
              <MDBCardBody>
                <MDBInput
                  type="text"
                  id="nombre"
                  label="Nombre"
                  icon="user"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertSolict}
                />
                <MDBInput
                  type="text"
                  id="apellido"
                  label="Apellido"
                  icon="user"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertSolict}
                />
                <MDBInput
                  type="number"
                  id="cedula"
                  label="Cedula de Identidad"
                  icon="id-card"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertSolict}
                />
                <MDBInput
                  type="number"
                  id="edad"
                  label="Edad"
                  icon="user"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertSolict}
                />
                <MDBInput
                  label="Número de telefono"
                  icon="mobile-alt"
                  type="number"
                  id="numero_telefono"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertSolict}
                />
                <MDBInput
                  type="email"
                  id="correo"
                  label="Correo"
                  icon="envelope"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertSolict}
                />
              </MDBCardBody>
            </MDBCard>
            <MDBCardHeader className="text-center" color="mdb-color">
              <h3>
                <b>Comunidad</b>
                <MDBIcon icon="home" className="ml-3" />
              </h3>
            </MDBCardHeader>
            <MDBCard>
              <MDBCardBody>
                <MDBInput
                  type="text"
                  id="nombre_comunidad"
                  label="Nombre de la comunidad"
                  icon="home"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertCom}
                />
                <MDBInput
                  type="text"
                  id="estado_comunidad"
                  label="Estado de la comunidad"
                  icon="map-marker-alt"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertCom}
                />
                <MDBInput
                  type="text" 
                  id="municipio_comunidad"
                  label="Municipio de la comunidad"
                  icon="map-marker-alt"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertCom}
                />
                <MDBInput
                  type="text"
                  id="parroquia_comunidad"
                  label="Parroquia de la comunidad"
                  icon="map-marker-alt"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertCom}
                />
                <MDBInput
                  label="Codigo Postal"
                  icon="hashtag"
                  type="number"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertCom}
                  id="codigo_postal"
                />
              </MDBCardBody>
            </MDBCard>
            <MDBCardHeader className="text-center" color="mdb-color">
              <h3>
                <b>Motivo de Solicitud</b>
                <MDBIcon icon="book" className="ml-3" />
              </h3>
            </MDBCardHeader>
            <MDBCard>
              <MDBCardBody>
                <MDBInput
                  type="number"
                  id="monto_motivo"
                  label="Monto a solicitar"
                  icon="money-bill-wave"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertRs}
                />
                <MDBInput
                  type="textarea"
                  id="motivo"
                  label="Describa el motivo"
                  icon="pencil-alt"
                  validate
                  error="wrong"
                  success="right"
                  onChange={this.InsertRs}
                />
                <MDBRow style={{marginLeft:2}}>
                  <MDBIcon
                    icon="check"
                    size="2x"
                  />
                  <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel htmlFor="cargo_empleado">
                        Tipo de Solicitud
                      </InputLabel>
                      <Select
                        className="btn-group mr-2" 
                        style={{ width: "40rem"}}
                        value={this.state.tipo_motivo}
                        onChange={this.handleChange}
                        inputProps={{
                          name: 'tipo_motivo',
                          id: 'tipo_motivo', 
                        }}
                        >
                        <MenuItem value="">
                          <em>Ninguno</em>
                        </MenuItem>
                        <MenuItem value="Monetaria">Monetaria</MenuItem>
                        <MenuItem value="Social">Social</MenuItem>
                        <MenuItem value="Cultural">Cultural</MenuItem>
                        <MenuItem value="Humanitaria">Humanitaria</MenuItem>
                        <MenuItem value="Medica">Medica</MenuItem>
                        <MenuItem value="Tecnologica">Tecnologica</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </MDBRow>
                <br/>
                <div className="text-center">
                  <MDBBtn color="success" type="submit" size="lg" onClick={this.toggle(1)}>
                    Guardar <MDBIcon icon="check" className="ml-2" />
                  </MDBBtn>
                  <MDBBtn color="danger" size="lg" onClick={this.toggle(2)}>
                    Cancelar <MDBIcon far icon="times-circle" className="ml-2" />
                  </MDBBtn>
                </div>
                <div>
                  <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)} size="lg">
                    <MDBModalHeader toggle={this.toggle(1)}>MENSAJE</MDBModalHeader>
                      <MDBModalBody className="text-center">
                        <h3>Solicitud registrada con exito</h3>
                         <MDBIcon far icon="check-circle" className="green-text pr-3 ml-1" size="3x"/>
                      </MDBModalBody>
                    <MDBModalFooter>
                      <Link to='/Recepcion'>
                        <MDBBtn color="success" size="sm">OK</MDBBtn>
                      </Link>
                    </MDBModalFooter>
                  </MDBModal>
                </div>
                <div>
                  <MDBModal isOpen={this.state.modal2} toggle={this.toggle(2)} size="lg">
                    <MDBModalHeader toggle={this.toggle(2)}>ATENCIÓN</MDBModalHeader>
                      <MDBModalBody className="text-center">
                        <h3>Esta seguro que desea cancelar el registro?</h3>
                        <MDBIcon far icon="times-circle" className="red-text pr-3 ml-2" size="3x"/>
                      </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color="danger" size="sm" onClick={this.toggle(2)}>NO</MDBBtn>
                      <Link to='/Recepcion'>
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
    );
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);
