import {Cookies} from 'react-cookie';
import { api } from './foodsharebook_api';
import { login, setCurrentUser } from '../actions/user';
import { showError } from '../components/lib/common';
import { getAndSendAction } from './common_requests';

const path = 'users';

export const logIn = (user, rememberMe ) => {
  return async ( dispatch ) => {
    try {
      let response = await api.post(`${path}/login`, user);
      if(response.status === 200 ){
        if(rememberMe){
          const cookies = new Cookies();
          cookies.set('Authorization', response.data.auth_token, { path: '/' , maxAge: 31536000});
        }
        api.defaults.headers.common['Authorization'] = response.data.auth_token;
        response = await api.get(`${path}/current_user_data`);
        const { status, data } = response
        if( status === 200){
          dispatch(setCurrentUser(data))
        } else {
          dispatch(showError("Error de correo o contraseña"))
        }
          dispatch(login())
      } else {
         dispatch(showError("Error de correo o contraseña"))
      }
    }
    catch (error) {
      throw (error)
    }
  }
}

export const getUserData = () => {
  return getAndSendAction ({
    path : `${path}/current_user_data`,
    action: setCurrentUser
  })
}

export default logIn;
