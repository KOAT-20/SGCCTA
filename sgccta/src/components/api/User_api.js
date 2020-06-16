const api = 'http://localhost:8080/registerUser/';

export const addNewsUsers = (nombre_empleado, apellido_empleado, usuario_id, rol_id) => fetch(`${api}registerDataEmployee`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		nombre_empleado: nombre_empleado,
	    apellido_empleado: apellido_empleado,
	    usuario_id: usuario_id,
	    rol_id: rol_id
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const passLoginAccess = (correo, clave) => fetch(`${api}registerPassLogin`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		correo: correo,
		clave: clave
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const getRegisterEmployee = () => fetch (`${api}getDataEmployee`,
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

export const getRolsUsers = () => fetch (`${api}getRolsOfUsers`,
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

export const deleteRegisterEmployee  = (empleado_id) => fetch(`${api}deleteDataEmployee`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		empleado_id: empleado_id
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const deleteRegisterUser = (usuario_id) => fetch(`${api}deleteDataUser`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		usuario_id: usuario_id
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

	/*-----------------------------------------------------------

	============================================================
					R U T A S   D E   LOGIN
	============================================================

	*/

export const accesLogin = (correo, clave) => fetch(`${api}login`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		correo: correo,
		clave: clave
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});

export const validateAcces = (tiempo) => fetch(`${api}validate`,
{
	method: 'post',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json'
	},
	body : JSON.stringify({
		tiempo: tiempo
	})
})
.then(res => res.json())
.catch((error) => {
		console.log('The error is:', error.message);
	});
