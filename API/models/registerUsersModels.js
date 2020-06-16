const nameApp = 'RegisterUsersModel';
const debug = require('debug')(nameApp);
const util = require('util');
const pool = require('./pg.js');
const moment = require('moment');

const addNewRegisterUser = (nombre_empleado, apellido_empleado, usuario_id, rol_id, callback) => {
  const query = util.format ("INSERT INTO empleado (nombre_empleado, apellido_empleado, usuario_id, rol_id) VALUES ('%s', '%s', %d, %d) RETURNING empleado_id",
    nombre_empleado, apellido_empleado, usuario_id, rol_id);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            //debug('res.rows: ', res.rows.result.length);
            callback(false, res.rows[0]);
          } else {
            data.result = 'not found';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

const passLogin = (correo, clave, callback) => {
  const query = util.format ("INSERT INTO usuario (correo, clave) VALUES ('%s', '%s') RETURNING usuario_id",
    correo, clave);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            //debug('res.rows: ', res.rows.result.length);
            callback(false, res.rows[0]);
          } else {
            data.result = 'not found';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

const getRegisterDataEmployee = (callback) => {
  // const query = util.format ("SELECT * FROM empleado INNER JOIN usuario ON empleado.usuario_id = usuario.usuario_id");
  const query = util.format ("SELECT * FROM empleado INNER JOIN usuario ON empleado.usuario_id = usuario.usuario_id INNER JOIN roles ON empleado.rol_id = roles.rol_id");
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            callback(false, res.rows);
          } else {
            data.result = 'not found';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

const getDataRolUsers = (callback) => {
  const query = util.format ("SELECT * FROM public.roles");
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            //debug('res.rows: ', res.rows.result.length);
            callback(false, res.rows);
          } else {
            data.result = 'not found';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

const deleteRegisterDataEmployee = (empleado_id, callback) => {
  const query = util.format ("DELETE FROM public.empleado WHERE empleado_id = %d;",
    empleado_id);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            //debug('res.rows: ', res.rows.result.length);
            callback(false, 'empleado eliminado');
          } else {
            data.result = 'not found';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

const deleteRegisterDataUser = (usuario_id, callback) => {
  const query = util.format ("DELETE FROM public.usuario WHERE usuario_id = %d;",
    usuario_id);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            //debug('res.rows: ', res.rows.result.length);
            callback(false, 'usuario eliminado');
          } else {
            data.result = 'not found';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

const accesLogin = (correo, clave, callback) => {
  const query = util.format ("SELECT * FROM public.usuario INNER JOIN	public.empleado ON usuario.usuario_id = empleado.usuario_id INNER JOIN public.roles ON empleado.rol_id = roles.rol_id WHERE usuario.correo = '%s' AND usuario.clave = '%s';",
    correo, clave);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            console.log(res.rows[0]);
            const tiempo = moment().add(30, 'minutes');
            console.log(moment());
            console.log(tiempo);
            res.rows[0].exp = moment().unix(tiempo)
            callback(false, res.rows[0]);
          } else {
            data.result = 'Correo o Clave Incorrecta';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

const validateAcces = (exp, callback) => {
  result = {}
  if (exp <= moment().unix()) {
    console.log('sesion expirada');
    result.activa = false
  } else {
    console.log('sesion NO expirada');
    result.activa = true
  }
  callback(false, result);
}

module.exports = {
	addNewRegisterUser,
  passLogin,
  getRegisterDataEmployee,
  getDataRolUsers,
  deleteRegisterDataEmployee,
  deleteRegisterDataUser,
  accesLogin,
  validateAcces,
};
