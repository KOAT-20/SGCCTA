const nameApp = 'RegisterModel';
const debug = require('debug')(nameApp);
const util = require('util');
const pool = require('./pg.js');

const addRegisterSolicitante = (name, last_name, dni, old_year, phone, email, comunidad_id, motivo_id, callback) => {
  const query = util.format ("INSERT INTO solicitante (nombre_solicitante, apellido_solicitante, cedula_solicitante, edad_solicitante, telefono_solicitante, correo_solicitante, comunidad_id, motivo_id) VALUES ('%s', '%s', %d, %d, %d, '%s', %d, %d) RETURNING solicitante_id",
    name, last_name, dni, old_year, phone, email, comunidad_id, motivo_id);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            debug('res.rows: ', res.rows[0]);
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

const addRegisterComunidad = (name_com, state_com, muni_com, par_com, postal_code_com, callback) => {
  const query = util.format ("INSERT INTO comunidad (nombre_comunidad, estado_comunidad, municipio_comunidad, parroquia_comunidad, codigo_postal) VALUES ('%s', '%s', '%s', '%s', %d) RETURNING comunidad_id",
    name_com, state_com, muni_com, par_com, postal_code_com);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            debug('res.rows: ', res.rows[0]);
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

const addNewReason = (mount_slct, descrip, type_slct, callback) => {
  const query = util.format ("INSERT INTO motivo (monto_solicitud, descripcion_motivo, tipo_solicitud) VALUES (%d, '%s', '%s') RETURNING motivo_id",
    mount_slct, descrip, type_slct);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            debug('res.rows: ', res.rows[0]);
            callback(false,res.rows[0]);
          } else {
            data.result = 'not found';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

const getRegisterDataSlct = (callback) => {
  const query = util.format ("SELECT * FROM solicitante INNER JOIN comunidad ON solicitante.comunidad_id = comunidad.comunidad_id INNER JOIN motivo ON solicitante.motivo_id = motivo.motivo_id");
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

const getSpecificDataSlct = (solicitante_id, callback) => {
  const query = util.format ("SELECT * FROM solicitante INNER JOIN comunidad ON solicitante.comunidad_id = comunidad.comunidad_id INNER JOIN motivo ON solicitante.motivo_id = motivo.motivo_id WHERE solicitante.solicitante_id =  %d",
  solicitante_id);
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

const updateAllDataSlc = (idslc, name, last_name, dni, old_year, phone, email, callback) => {
  const query = util.format ("UPDATE public.solicitante SET nombre_solicitante='%s', apellido_solicitante='%s', cedula_solicitante=%d, edad_solicitante=%d, telefono_solicitante=%d, correo_solicitante='%s' WHERE solicitante_id=%d",
    name, last_name, dni, old_year, phone, email, idslc);
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

const updateAllDataCom = (idcom, name_com, state_com, muni_com, par_com, postal_code_com, callback) => {
  const query = util.format ("UPDATE public.comunidad SET nombre_comunidad='%s', estado_comunidad='%s', municipio_comunidad='%s', parroquia_comunidad='%s', codigo_postal=%d WHERE comunidad_id=%d",
    name_com, state_com, muni_com, par_com, postal_code_com, idcom);
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

const updateAllDataMot = (idmot, monto_slc, descrip_slc, type_slc, callback) => {
  const query = util.format ("UPDATE public.motivo SET monto_solicitud=%sd, descripcion_motivo='%s', tipo_solicitud='%s' WHERE motivo_id=%d",
    monto_slc, descrip_slc, type_slc, idmot);
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

const deleteRegisterDataSolicitante = (solicitante_id, callback) => {
  const query = util.format ("DELETE FROM public.solicitante WHERE solicitante_id = %d;",
    solicitante_id);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            //debug('res.rows: ', res.rows.result.length);
            callback(false, 'solicitante eliminado');
          } else {
            data.result = 'not found';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

const deleteRegisterDataComunidad = (comunidad_id, callback) => {
  const query = util.format ("DELETE FROM public.comunidad WHERE comunidad_id = %d;",
    comunidad_id);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            //debug('res.rows: ', res.rows.result.length);
            callback(false, 'comunidad eliminada');
          } else {
            data.result = 'not found';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

const deleteRegisterDataMotivo = (motivo_id, callback) => {
  const query = util.format ("DELETE FROM public.motivo WHERE motivo_id = %d;",
    motivo_id);
  const data = {};
  return pool.query (query, (err, res) => {
    if (!err) {
          if ((res.rowCount !== 0) && (res.rows != null)) {
            //debug('res.rows: ', res.rows.result.length);
            callback(false, 'motivo eliminado');
          } else {
            data.result = 'not found';
            callback(false, data);
          }
      } else {
          callback(err.stack, null);
      }
  });
}

module.exports = {
  addRegisterSolicitante,
  addRegisterComunidad,
  addNewReason,
  getRegisterDataSlct,
  getSpecificDataSlct,
  updateAllDataSlc,
  updateAllDataCom,
  updateAllDataMot,
  deleteRegisterDataSolicitante,
  deleteRegisterDataComunidad,
  deleteRegisterDataMotivo
};
