import {accesLogin, validateAcces} from './api/User_api';

class Authorization {

 AuthLogin = (correo, clave, props) => {
   console.log(correo);
   console.log(clave);
   console.log(props);
    accesLogin(correo, clave)
    .then(result => {
      if(result.result === 'Correo o Clave Incorrecta') {
        console.log(result.result);
        window.alert ('Correo o Clave Incorrecta');
      } else {
        console.log(result);
        this.setUser(result);
        this.redirect(result.rol_id, props);
      }
    })
  }

  setUser = (data) => {
    localStorage.setItem('usuario_activo', JSON.stringify(data));
  }

  getUser = () => {
    return localStorage.getItem('usuario_activo')
  }

  loggedIn = () => {
    const user = this.getUser();
    validateAcces(user.exp)
    .then(result => {
      return !result;
    })
  }

  logout = (props) => {
      // Clear user token and profile data from localStorage
      localStorage.removeItem('usuario_activo');
      props.history.replace('/');

  }

  redirect = (rol, props) => {
    switch (rol) {
      case 1: {
        props.history.replace('/Presidencia')
        break;
      }
      case 2: {
        props.history.replace('/DireccionGeneral')
        break;
      }
      case 3: {
        props.history.replace('/Admin')
        break;
      }
      case 4: {
        props.history.replace('/Recepcion')
        break;
      }


      default:
      props.history.replace('/');

    }
  }
}

export default Authorization;
