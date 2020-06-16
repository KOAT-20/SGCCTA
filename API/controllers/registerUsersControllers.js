const nameApp = 'RegisterControllerUsers';
const debug = require('debug')(nameApp);
const RegisterUsersModel = require ('../models/registerUsersModels.js');
const register = 1;

const addNewsUsers = (req, res) => {
	const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 4) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const nombre_empleado = req.body.nombre_empleado;
      const apellido_empleado = req.body.apellido_empleado;
      const usuario_id = req.body.usuario_id;
      const rol_id = req.body.rol_id;
      debug('req.body: ', req.body);
      RegisterUsersModel.addNewRegisterUser(nombre_empleado, apellido_empleado, usuario_id, rol_id,
        (err, RegisterUser) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterControllerUsers: ', RegisterUser);
            res.send(RegisterUser);
          }
        });
      }
    } catch (e) {
    debug('error catch "addNewsUsers" of registerUsersController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const passLoginAccess = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const correo = req.body.correo;
      const clave = req.body.clave;
      debug('req.body: ', req.body);
      RegisterUsersModel.passLogin(correo, clave,
        (err, LoginAccess) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterControllerUsers: ', LoginAccess);
            res.send(LoginAccess);
          }
        });
      }
    } catch (e) {
    debug('error catch "passLogin" of registerUsersController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getRegisterEmployee = (req, res) => {
  const result = {};
  try {
    RegisterUsersModel.getRegisterDataEmployee((err, SearchDataEmployee) => {
      if (err) {
        result.messageError = err;
        res.status(400).send(result);
      } else {
        debug('RegisterControllerUsers: ', SearchDataEmployee);
        res.send(SearchDataEmployee);
      }
    });
  } catch (e) {
    debug('error catch in "getRegisterEmployee" of registerUsersControllers: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const getRolsUsers = (req, res) => {
  const result = {};
  try {
    RegisterUsersModel.getDataRolUsers((err, RolsUsers) => {
      if (err) {
        result.messageError = err;
        res.status(400).send(result);
      } else {
        debug('RegisterControllerUsers: ', RolsUsers);
        res.send(RolsUsers);
      }
    });
  } catch (e) {
    debug('error catch in "getDataRolUsers" of registerUsersControllers: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const deleteRegisterEmployee = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const empleado_id = req.body.empleado_id;
      debug('req.body: ', req.body);
      RegisterUsersModel.deleteRegisterDataEmployee(empleado_id,
        (err, DeleteEmlpoyee) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterControllerUsers: ', DeleteEmlpoyee);
            res.send(DeleteEmlpoyee);
          }
        });
      }
    } catch (e) {
    debug('error catch "deleteRegisterEmploye" of registerUsersController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const deleteRegisterUser = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const usuario_id = req.body.usuario_id;
      debug('req.body: ', req.body);
      RegisterUsersModel.deleteRegisterDataUser(usuario_id,
        (err, DeteleUser) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterControllerUsers: ', DeteleUser);
            res.send(DeteleUser);
          }
        });
      }
    } catch (e) {
    debug('error catch "deleteRegisterUser" of registerUsersController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const accesLogin = (req, res) => {
  const result = {};
  try {
    debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 2) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const correo = req.body.correo;
			const clave = req.body.clave;
      debug('req.body: ', req.body);
      RegisterUsersModel.accesLogin(correo, clave,
        (err, login) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterControllerUsers: ', login);
            res.send(login);
          }
        });
      }
    } catch (e) {
    debug('error catch "accesLogin" of registerUsersController: ', e);
    result.messageError = e;
    res.send(result);
  }
};

const validateAcces = (req, res) => {
	const result = {}
	try {
		debug('req.body.length: ', Object.keys(req.body).length);
    if (Object.keys(req.body).length !== 1) {
      debug('request bad params not received');
      result.parambad = 'request bad';
      res.status(400).send(result);
    } else { //  = req.body.parametro recibido (nombre)
      const tiempo = req.body.tiempo;
      debug('req.body: ', req.body);
      RegisterUsersModel.validateAcces(tiempo,
        (err, validate) => {
          if (err) {
            result.messageError = err;
            res.status(400).send(result);
          } else {
            debug('RegisterControllerUsers: ', validate);
            res.send(validate);
          }
        });
      }
	} catch (e) {
		debug('error catch "validateAcces" of registerUsersController: ', e);
		result.messageError = e;
		res.send(result);
	}
}

module.exports = {
	addNewsUsers,
  passLoginAccess,
  getRegisterEmployee,
  getRolsUsers,
  deleteRegisterEmployee,
  deleteRegisterUser,
	accesLogin,
  validateAcces
};
