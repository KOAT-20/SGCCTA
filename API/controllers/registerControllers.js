const nameApp = 'RegisterController';
const debug = require('debug')(nameApp);
const RegisterModel = require ('../models/registerModels.js');
const register = 1;

const addRegisterSlc = (req, res) => {
	const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 8) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const name = req.body.name;
      const last_name = req.body.last_name;
      const dni = req.body.dni;
      const old_year = req.body.old_year;
      const phone = req.body.phone;
      const email = req.body.email;
			const comunidad_id = req.body.comunidad_id;
			const motivo_id = req.body.motivo_id;
      debug('req.body: ', req.body);
      RegisterModel.addRegisterSolicitante(name, last_name, dni, old_year, phone, email,
        comunidad_id, motivo_id, (err, RegisterSlc) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterController: ', RegisterSlc);
            res.send(RegisterSlc);
          }
        });
      }
    } catch (e) {
    debug('error catch "addRegisterSlc" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const addRegisterCom = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 5) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const name_com = req.body.name_com;
      const state_com = req.body.state_com;
      const muni_com = req.body.muni_com;
      const par_com = req.body.par_com;
      const postal_code_com = req.body.postal_code_com;
      debug('req.body: ', req.body);
      RegisterModel.addRegisterComunidad(name_com, state_com, muni_com, par_com, postal_code_com, (err, RegisterCom) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterController: ', RegisterCom);
            res.send(RegisterCom);
          }
        });
      }
    } catch (e) {
    debug('error catch in "addRegisterCom" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const addReason = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 3) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const mount_slct = req.body.mount_slct;
      const descrip = req.body.descrip;
      const type_slct = req.body.type_slct;
      debug('req.body: ', req.body);
      RegisterModel.addNewReason(mount_slct, descrip, type_slct,
        (err, RegisterReason) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterController: ', RegisterReason);
            res.send(RegisterReason);
          }
        });
      }
    } catch (e) {
    debug('error catch in "addReason" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getRegisterData = (req, res) => {
  const result = {};
  try {
	    RegisterModel.getRegisterDataSlct( (err, SearchData) => {
	      if (err) {
	        result.messageError = err;
	        res.status(400).send(result);
	      } else {
	        debug('RegisterController: ', SearchData);
	        res.send(SearchData);
	      }
	    });
  } catch (e) {
    debug('error catch in "getRegisterData" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getSpecificData = (req, res) => {
  const result = {};
  try {
		debug('req.body.length: ', Object.keys(req.body).length);
		if (Object.keys(req.body).length !== 1) {
			debug('request bad params not received');
			result.parambad = 'request bad';
			res.status(400).send(result);
		} else { //  = req.body.parametro recibido (nombre)
			const solicitante_id = req.body.solicitante_id;
			debug('req.body: ', req.body);
	    RegisterModel.getSpecificDataSlct(solicitante_id, (err, SearchDataSpecific) => {
	      if (err) {
	        result.messageError = err;
	        res.status(400).send(result);
	      } else {
	        debug('RegisterController: ', SearchDataSpecific);
	        res.send(SearchDataSpecific);
	      }
	    });
		}
  } catch (e) {
    debug('error catch in "getSpecificData" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateDataSlc = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 7) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const idslc = req.body.idslc;
      const name = req.body.name;
      const last_name = req.body.last_name;
      const dni = req.body.dni;
      const old_year = req.body.old_year;
      const phone = req.body.phone;
      const email = req.body.email;
      debug('req.body: ', req.body);
      RegisterModel.updateAllDataSlc(idslc, name, last_name, dni, old_year, phone, email,
        (err, DataSlc) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterController: ', DataSlc);
            res.send(DataSlc);
          }
        });
      }
    } catch (e) {
    debug('error catch in "updateDataSlc" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateDataCom = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 6) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const idcom = req.body.idcom;
      const name_com = req.body.name_com;
      const state_com = req.body.state_com;
      const muni_com = req.body.muni_com;
      const par_com = req.body.par_com;
      const postal_code_com = req.body.postal_code_com;
      debug('req.body: ', req.body);
      RegisterModel.updateAllDataCom(idcom, name_com, state_com, muni_com, par_com, postal_code_com,
        (err, DataCom) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterController: ', DataCom);
            res.send(DataCom);
          }
        });
      }
    } catch (e) {
    debug('error catch in "addRegisterCom" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const updateDataMot = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 4) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const idmot = req.body.idmot;
      const monto_slc = req.body.monto_slc;
      const descrip_slc = req.body.descrip_slc;
      const type_slc = req.body.type_slc;
      debug('req.body: ', req.body);
      RegisterModel.updateAllDataMot(idmot, monto_slc, descrip_slc, type_slc,
        (err, DataMot) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterController: ', DataMot);
            res.send(DataMot);
          }
        });
      }
    } catch (e) {
    debug('error catch in "addRegisterCom" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const deleteDataSolicitante = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const solicitante_id = req.body.solicitante_id;
      debug('req.body: ', req.body);
      RegisterModel.deleteRegisterDataSolicitante(solicitante_id,
        (err, DeleteSolicitante) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterControllerUsers: ', DeleteSolicitante);
            res.send(DeleteSolicitante);
          }
        });
      }
    } catch (e) {
    debug('error catch "deleteDataSolicitante" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const deleteDataComunidad = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const comunidad_id = req.body.comunidad_id;
      debug('req.body: ', req.body);
      RegisterModel.deleteRegisterDataComunidad(comunidad_id,
        (err, DeleteComunidad) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterControllerUsers: ', DeleteComunidad);
            res.send(DeleteComunidad);
          }
        });
      }
    } catch (e) {
    debug('error catch "deleteDataComunidad" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const deleteDataMotivo = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const motivo_id = req.body.motivo_id;
      debug('req.body: ', req.body);
      RegisterModel.deleteRegisterDataMotivo(motivo_id,
        (err, DeleteMotivo) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterControllerUsers: ', DeleteMotivo);
            res.send(DeleteMotivo);
          }
        });
      }
    } catch (e) {
    debug('error catch "deleteDataMotivo" of registerController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

module.exports = {
    addRegisterSlc,
    addRegisterCom,
    addReason,
    getRegisterData,
    getSpecificData,
    updateDataSlc,
    updateDataCom,
    updateDataMot,
    deleteDataSolicitante,
    deleteDataComunidad,
    deleteDataMotivo
};
