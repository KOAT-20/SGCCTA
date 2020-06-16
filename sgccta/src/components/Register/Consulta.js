import React, { Component } from "react"; 
import { 
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardHeader
  } from 'mdbreact';
import { BrowserRouter as Route, Link } from 'react-router-dom';
// Components
import BarApp from './BarApp.js';
import { 
  getRegisterData, 
  deleteDataSolicitante,
  deleteDataComunidad,
  deleteDataMotivo 
} from '../api/Register_api.js';
import { table } from '../utils/table.js';
import SearchingData from '../Loading.js';
import Authorization from '../accesUser';

class Search extends Component {

   constructor (props) {
    super (props);
    this.access = new Authorization();
    this.state = {
      table: {
        columns: [
          {
            label: 'Cedula',
            field: 'cedula',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Nombre',
            field: 'nombre',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Apellido',
            field: 'apellido',
            sort: 'asc',
            width: 200
          },
          {
            label: 'Correo Electrónico',
            field: 'correo_electronico',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Número de teléfono',
            field: 'numero_de_telefono',
            sort: 'asc',
            width: 100
          },
          {
            label: 'Acciones',
            field: ['Btn1', 'Btn2'],
            sort: 'asc'
          }
        ]
      },
      consultas: [],
      isLoaded: false
      }
    }

    handleRemoveSolicitud (index, index2, index3) {
    console.log (index, index2, index3)
    if (window.confirm("Esta seguro que desea eliminar este registro?")){
      deleteDataMotivo (index)
      .then (result => {
        deleteDataComunidad (index2)
          .then (result => {
            deleteDataSolicitante (index3)
            .then (result => {
            alert ('Solicitud eliminada')
          })
        })
      })
      this.setState ({
        consultas: this.state.consultas.filter((e, i) => {
          return i !== index
        })
      })
    }
  }

  componentDidMount () {
    getRegisterData ()
    .then(consultas => {
      this.setState ({
        consultas
      }) 
      console.log('getRegisterData: ',consultas);
      let { table } = this.state;
      if (consultas.consultas !== 'not found') {
      table.rows = consultas.map(consulta => ({
        cedula_solicitante : consulta.cedula_solicitante,
        nombre_solicitante : consulta.nombre_solicitante,
        apellido_solicitante : consulta.apellido_solicitante,
        correo_solicitante : consulta.correo_solicitante,
        telefono_solicitante : consulta.telefono_solicitante,
        Btn1: <MDBBtn size="sm" color="primary" onClick={() => this.handleData(consulta.solicitante_id)}>Modificar</MDBBtn>,
        Btn2: <MDBBtn size="sm" color="danger" onClick={this.handleRemoveSolicitud.bind(this, consulta.solicitante_id, consulta.comunidad_id, consulta.motivo_id)}>Eliminar</MDBBtn>,
        Btn3: <MDBBtn size="sm" color="mdb-color" onClick={() => this.handleReport(consulta.solicitante_id)}>Reporte</MDBBtn>
      }));
    }
    this.setState({
      table,
      consultas,
      isLoaded : true
    })
      console.log('rows: ', this.state)
    })
  }

  handleData(data) {
    console.log(data);
    this.props.history.replace('/Modificar',
    { solicitante_id : data })
  }

  handleReport(data) {
    console.log(data);
    this.props.history.replace('/Reporte',
    { solicitante_id : data })
  }

  render () {
    if (!this.state.isLoaded) {
      return (
        <div>
        <BarApp />
          <MDBContainer style={{ width: "25rem", marginTop:50}}>
            <MDBCard>
              <MDBCardBody>
                <div>
                  <SearchingData />
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      ) 
    } else {
      return (
        <div>
          <BarApp />
          <MDBContainer style={{ width: "80rem"}}>
            <MDBCard style={{marginTop:'5%'}}>
              <MDBCardHeader className="h3 text-center py-4" color="mdb-color">
                Solicitudes Resgistrada
              </MDBCardHeader>
              <MDBCardBody>
                <div className="lista">
                  {table(this.state.table)}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      );
    }
  }
}

export default Search;