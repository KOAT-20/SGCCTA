// Dependencies
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { BrowserRouter as Route, Link } from 'react-router-dom';
import { MDBContainer, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBIcon, MDBRow } from 'mdbreact';
import BarAppMobile from './BarAppMobile.js';
import { addRegisterSlc, addRegisterCom, addReason } from '../../api/Register_api';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

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

class FormMobile extends Component {
    constructor () {
        super();
        this.state = {
            nombre: " ",
            apellido: " ",
            fecha_nacimiento: " ",
            edad: " ",
            numero_telefono: " ",
            correo: " ",
            nombre_comunidad: " ",
            estado_comunidad: " ",
            municipio_comunidad: " ",
            parroquia_comunidad: " ",
            codigo_postal: " ",
            tipo_motivo: [],
            monto_motivo: " ",
            motivo: " "
        }
    }

    InsertSolict = (e) => {
        this.setState({
     [e.target.id]: e.target.value
   });
   console.log(e.target.id,': ',e.target.value);
    }

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

  render() {
    const { classes } = this.props;
    return (
        <div>
            <BarAppMobile />
            <MDBContainer style={{marginTop:20}}>
                <form onSubmit={this.InsertData}>
                    <MDBCard>
                        <MDBCardBody>
                            <p className="h3 text-center py-4">
                                <MDBIcon icon="user" size="2x" />
                                <br/>
                                DATOS DEL SOLICITANTE
                            </p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Nombre"
                                    icon="user"
                                    id="nombre"
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertSolict}
                                />
                                <MDBInput
                                    label="Apellido"
                                    icon="user"
                                    id="apellido"
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertSolict}
                                />  
                                <MDBInput
                                    icon="calendar-alt"
                                    type="date"
                                    id="fecha_nacimiento"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertSolict}
                                />
                                <MDBInput
                                    label="Edad"
                                    icon="user"
                                    id="edad"
                                    type="number"
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
                                    label="Correo"
                                    icon="envelope"
                                    type="email"
                                    validate
                                    id="correo"
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertSolict}
                                 />
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <br/>
                    <MDBCard>
                        <MDBCardBody>
                            <p className="h3 text-center py-4">
                                <MDBIcon icon="home" size="2x" />
                                <br/>
                                DATOS DE LA COMUNIDAD
                            </p>
                            <div className="grey-text">
                                <MDBInput
                                    label="Nombre de la comunidad"
                                    icon="home"
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertCom}
                                    id="nombre_comunidad"
                                />
                                <MDBInput
                                    label="Estado de la comunidad"
                                    icon="map-marker-alt"
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertCom}
                                    id="estado_comunidad"
                                /> 
                                <MDBInput
                                    label="Municipio de la comunidad"
                                    icon="map-marker-alt"
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertCom}
                                    id="municipio_comunidad"
                                />
                                <MDBInput
                                    label="Parroquia de la comunidad"
                                    icon="map-marker-alt"
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertCom}
                                    id="parroquia_comunidad"
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
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <br/>
                    <MDBCard>
                        <MDBCardBody>
                            <p className="h3 text-center py-4">
                                <MDBIcon icon="user" size="2x" />
                                <br/>
                                DATOS DEL JEFE COMUNIDAD
                            </p>
                            <div className="grey-text">
                                <MDBInput
                                  label="Nombre"
                                    icon="user"
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertJf}
                                    id="nombre_jf"
                                />
                                <MDBInput
                                    label="Apellido"
                                    icon="user"
                                    type="text"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertJf}
                                    id="apellido_jf"
                                />
                                <MDBInput
                                    icon="calendar-alt"
                                    type="date"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertJf}
                                    id="fch_nacimiento_jf"
                                />
                                <MDBInput
                                    label="Cedula de identidad"
                                    icon="id-card"
                                    type="number"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertJf}
                                    id="cedula_jf"
                                />
                                <MDBInput
                                    label="Número de telefono"
                                    icon="mobile-alt"
                                    type="number"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertJf}
                                    id="telefono_jf"
                                />
                                <MDBInput
                                    label="Correo"
                                    icon="envelope"
                                    type="email"
                                    validate
                                    error="wrong"
                                    success="right"
                                    onChange={this.InsertJf}
                                    id="correo_jf"
                                />
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                    <br/>
                    <MDBCard>
                        <MDBCardBody>
                            <p className="h3 text-center py-4">
                                <MDBIcon icon="book" size="2x" />
                                <br/>
                                MOTIVO DE SOLICITUD
                            </p>
                            <div className="grey-text">
                                <MDBInput
                                  label="Monto Disponible"
                                  icon="money-bill-wave" 
                                  type="number"
                                  validate
                                  error="wrong"
                                  success="right"
                                  onChange={this.InsertRs}
                                  id="monto_motivo"
                                />
                                <MDBInput
                                  label="Describa el motivo"
                                  icon="pencil-alt" 
                                  type="textarea"
                                  validate
                                  error="wrong"
                                  success="right"
                                  onChange={this.InsertRs}
                                  id="motivo"
                                />
                                <div className="text-center">
                                    <FormControl className={classes.formControl}>
                                        <InputLabel htmlFor="tipo_motivo">Tipo de Solicitud</InputLabel>
                                        <Select 
                                          style={{ width: "15rem"}}
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
                                          <MenuItem value="Medica">Medica</MenuItem>
                                          <MenuItem value="Cultural">Cultural</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                                <br/>
                                <div className="text-center">
                                    <MDBBtn color="success" type="submit" size="lg">
                                        Guardar
                                    </MDBBtn>
                                    <Link to='/Home'>
                                        <MDBBtn color="danger" size="lg">
                                            Cancelar
                                        </MDBBtn>
                                    </Link>
                                </div>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </form>
            </MDBContainer>
        </div> 
    );
  }
}

FormMobile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormMobile);