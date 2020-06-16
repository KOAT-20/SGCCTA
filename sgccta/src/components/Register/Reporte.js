import React, { Component } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import BarApp from './BarApp.js';
import { getSpecificData } from '../api/Register_api.js';
import {
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBModalFooter
} from 'mdbreact';
import { CYTPDF, CCJPDF, PGPDF } from '../images/logos.js';
import Authorization from '../accesUser';

class Reporte extends Component {
  constructor (props) {
    super(props);
    this.access = new Authorization();
    this.state = {
      consultas: [],
      isLoaded : false
    }
    this.pdfPreview = this.pdfPreview.bind(this)
  }

  componentWillMount () {
    getSpecificData (this.props.history.location.state.solicitante_id)
    .then(consultas => {
      this.setState ({
        consultas
      })
      console.log('getSpecificData: ',consultas);
    })
  }

  pdfPreview = (id) => {
    const html = window.document.getElementById(id)
    html2canvas(html)
    .then((canvas) => {
      const imgData = canvas.toDataURL('image/png', 10.0); // Calidad de Imagen
      console.log(imgData);
      const pdf = new jsPDF("portrait", "mm", "A5");
      pdf.setProperties({
        title: 'Solicitud.pdf',
        subject: 'PDF de prueba',
        author: 'SCCTA',
        creator: 'SCCTA',
      });
      const width = pdf.internal.pageSize.getWidth()-16; //
      console.log(width);
      const height = pdf.internal.pageSize.getHeight()-6; //
      console.log(height);
      pdf.addImage(imgData, 'PNG', 4, 4, width, height ); // Posición de la inmagen

    window.open(pdf.output('bloburl','Solicitud.pdf'), '_blank');
    })
  }

  render () {
    let consultas = this.state.consultas.map((consulta, i) => {
        return (
          <div>
            <MDBContainer style={{ width:"70rem", marginTop:'3%'}}>
              <MDBCard>
                <MDBCardHeader className="text-center" color="mdb-color">
                  <h3>
                    <b>VISIALIZACIÓN DE DATOS</b>
                    <MDBIcon icon="edit" className="green-text pr-3 ml-3" />
                  </h3>
                </MDBCardHeader>
                <MDBCardBody>
                  <div id="Solicitud">
                    <br/>
                    <PGPDF /><br/><br/><br/><br/><br/><br/>
                      <MDBRow className="text-center">
                        <MDBCol><CYTPDF /></MDBCol>
                        <MDBCol><h1>Alcaldia del Municipio Sucre</h1><br/><h2>Concejo Municipal de Sucre</h2></MDBCol>
                        <MDBCol><CCJPDF /></MDBCol>
                      </MDBRow>
                    <br/><br/><br/><br/>
                    <div className="text-center">
                      <h3><b>SOLICITUD</b></h3>
                    </div>
                    <br/><br/><br/>
                    <MDBRow className="slc" style={{marginLeft:'10%'}}>
                      <MDBCol><a id ="slc" key={i}><b>Nombre: </b>{consulta.nombre_solicitante}</a></MDBCol>
                      <MDBCol><a id ="slc" key={i}><b>Apellido: </b>{consulta.apellido_solicitante}</a></MDBCol>
                      <MDBCol><a id ="slc" key={i}><b>Edad: </b>{consulta.edad_solicitante}</a></MDBCol>
                      <div className="w-100" />
                      <MDBCol size="4"><a id ="slc" key={i}><b>Cedula: </b>{consulta.cedula_solicitante}</a></MDBCol>
                      <MDBCol><a id ="slc" key={i}><b>Correo: </b>{consulta.correo_solicitante}</a></MDBCol>
                    </MDBRow>
                    <br/>
                    <MDBRow className="com" style={{marginLeft:'10%'}}>
                      <MDBCol><a id ="com" key={i}><b>Comunidad: </b>{consulta.nombre_comunidad}</a></MDBCol>
                      <MDBCol><a id ="com" key={i}><b>Estado: </b>{consulta.estado_comunidad}</a></MDBCol>
                      <MDBCol><a id ="com" key={i}><b>Codigo Postal: </b>{consulta.codigo_postal}</a></MDBCol>
                      <div className="w-100" />
                      <MDBCol size="4"><a id ="com" key={i}><b>Municipio: </b>{consulta.municipio_comunidad}</a></MDBCol>
                      <MDBCol><a id ="com" key={i}><b>Parroquia: </b>{consulta.municipio_comunidad}</a></MDBCol>
                    </MDBRow>
                    <br/>
                    <MDBRow className="mot" style={{marginLeft:'10%'}}>
                      <MDBCol size="8"><a id ="mot" key={i}><b>Monto estipulado: </b>{consulta.monto_solicitud}</a></MDBCol>
                      <MDBCol><a id ="mot" key={i}><b>Tipo de Solicitud: </b>{consulta.tipo_solicitud}</a></MDBCol>
                      <div className="w-100" />
                      <MDBCol><a id ="mot" key={i}><b>Descripción: </b>{consulta.descripcion_motivo}</a></MDBCol>
                    </MDBRow>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <MDBRow style={{marginLeft:'10%'}}>
                      <MDBCol size="8"><a><b>______________________________</b> </a></MDBCol>
                      <MDBCol><a><b>______________________________</b> </a></MDBCol>
                      <div className="w-100" />
                      <MDBCol size="8"><a><b>Firma de Dirección General</b> </a></MDBCol>
                      <MDBCol><a><b>Firma de Presidencia</b> </a></MDBCol>
                    </MDBRow>
                    <br/><br/><br/><br/><br/><br/><br/><br/>
                    <PGPDF />
                    <br/><br/>
                  </div>
                  <br/>
                  <div className="text-center">
                    <MDBBtn type="button" onClick={() => this.pdfPreview('Solicitud')}>Imprimir Solicitud</MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBContainer>
          </div>
        )
    })
    return (
      <div>
        <BarApp />
        {consultas}
      </div>
    )
  }
}
export default Reporte;
