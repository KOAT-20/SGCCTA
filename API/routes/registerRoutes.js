const express = require ('express');
const registerRouter = express.Router ();
const RegisterController = require ('../controllers/registerControllers.js');
const RegisterControllerUsers = require ('../controllers/registerUsersControllers.js');

// Rutas para las Solicitudes
registerRouter.post ('/registerDataSolicitante', RegisterController.addRegisterSlc);
registerRouter.post ('/registerDataComunidad', RegisterController.addRegisterCom);
registerRouter.post ('/registerReason', RegisterController.addReason);
registerRouter.get ('/getData', RegisterController.getRegisterData);
registerRouter.post ('/getSpecific', RegisterController.getSpecificData);
registerRouter.post ('/updateDataSolicitante', RegisterController.updateDataSlc);
registerRouter.post ('/updateDataComunidad', RegisterController.updateDataCom);
registerRouter.post ('/updateDataMotivo', RegisterController.updateDataMot);
registerRouter.post ('/deleteSolicitante', RegisterController.deleteDataSolicitante);
registerRouter.post ('/deleteComunidad', RegisterController.deleteDataComunidad);
registerRouter.post ('/deleteMotivo', RegisterController.deleteDataMotivo);
// Rutas para los usuarios
registerRouter.post ('/registerDataEmployee', RegisterControllerUsers.addNewsUsers);
registerRouter.post ('/registerPassLogin', RegisterControllerUsers.passLoginAccess);
registerRouter.get ('/getRolsOfUsers', RegisterControllerUsers.getRolsUsers);
registerRouter.get ('/getDataEmployee', RegisterControllerUsers.getRegisterEmployee);
registerRouter.post ('/deleteDataEmployee', RegisterControllerUsers.deleteRegisterEmployee);
registerRouter.post ('/deleteDataUser', RegisterControllerUsers.deleteRegisterUser);
registerRouter.post ('/login', RegisterControllerUsers.accesLogin);
registerRouter.post ('/validate', RegisterControllerUsers.validateAcces);


module.exports = registerRouter;
