import React from 'react';
import { MDBDataTable } from 'mdbreact';

export const table = (data) => {
	return(
		<MDBDataTable
  		reponsive ="true"
      entriesLabel="Mostrar paginas "
  		searchLabel="Buscar"
  		infoLabel={["Mostrando", "de", "de", "entradas"]}
  		paginationLabel={["Anterior", "Siguiente"]}
    	striped
    	small
    	data={data}
  	/>
	)
}