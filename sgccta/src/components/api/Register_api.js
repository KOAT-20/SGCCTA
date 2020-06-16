const api = 'http://localhost:8080/register/';

export const addRegisterSlc = (name, last_name, dni, old_year, phone, email, comunidad_id, motivo_id) => fetch(`${api}registerDataSolicitante`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		name : name,
		last_name : last_name,
		dni : dni,
		old_year : old_year,
		phone : phone,
		email : email,
		comunidad_id: comunidad_id,
		motivo_id: motivo_id
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const addRegisterCom = (name_com, state_com, muni_com, par_com, postal_code_com) => fetch(`${api}registerDataComunidad`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		name_com : name_com,
		state_com : state_com,
		muni_com : muni_com,
		par_com : par_com,
		postal_code_com : postal_code_com
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const addReason = (mount_slct, descrip, type_slct) => fetch(`${api}registerReason`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		mount_slct : mount_slct,
		descrip : descrip,
		type_slct: type_slct
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const getRegisterData = () => fetch (`${api}getData`,
{
	method: 'get',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	}
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const getSpecificData = (solicitante_id) => fetch (`${api}getSpecific`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		solicitante_id: solicitante_id
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const updateDataSlc = (idslc, name, last_name, dni, old_year, phone, email) => fetch(`${api}updateDataSolicitante`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		idslc : idslc,
		name : name,
		last_name : last_name,
		dni : dni,
		old_year : old_year,
		phone : phone,
		email : email,
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const updateDataCom = (idcom, name_com, state_com, muni_com, par_com, postal_code_com) => fetch(`${api}updateDataComunidad`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		idcom : idcom,
		name_com : name_com,
		state_com : state_com,
		muni_com : muni_com,
		par_com : par_com,
		postal_code_com : postal_code_com
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const updateDataMot = (idmot, monto_slc, descrip_slc, type_slc) => fetch(`${api}updateDataMotivo`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		idmot : idmot,
		monto_slc : monto_slc,
		descrip_slc : descrip_slc,
		type_slc : type_slc
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const deleteDataSolicitante  = (solicitante_id) => fetch(`${api}deleteSolicitante`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		solicitante_id : solicitante_id
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const deleteDataComunidad  = (comunidad_id) => fetch(`${api}deleteComunidad`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		comunidad_id : comunidad_id
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const deleteDataMotivo  = (motivo_id) => fetch(`${api}deleteMotivo`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		motivo_id : motivo_id
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});
