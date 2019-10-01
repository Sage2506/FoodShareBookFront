import {Cookies} from 'react-cookie';
import { api } from './foodsharebook_api';
import { login } from '../actions/user';

export const logIn = (user, rememberMe) => {
  return async dispatch => {
    try {
      const response = await api.post(`users/login`, user);      
      if(response.status === 200 ){
        if(rememberMe){
          const cookies = new Cookies();
          cookies.set('Authorization', response.data.auth_token, { path: '/' });
        }
        dispatch(login())
      }
    }
    catch (error) {      
      throw (error)
    }
  }
}

export default logIn;
