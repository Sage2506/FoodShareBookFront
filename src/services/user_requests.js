import {Cookies} from 'react-cookie';
import { api } from './foodsharebook_api';
import { login, setCurrentUser, setUser, logout, setUserPermissions } from '../actions/user';
import { paginate, showError } from '../components/lib/common';

const Path = 'users';

export const logIn = (user, rememberMe ) => {
  return async ( dispatch ) => {
    try {
      let response = await api.post(`users/login`, user);
      if(response.status === 200 ){
        if(rememberMe){
          const cookies = new Cookies();
          cookies.set('Authorization', response.data.auth_token, { path: '/' , maxAge: 31536000});
        }
        api.defaults.headers.common['Authorization'] = response.data.auth_token;
        response = await api.get(`users/current_user_data`);
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

export default logIn;
