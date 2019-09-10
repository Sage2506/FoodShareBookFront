import { api } from "./foodsharebook_api";
import Cookies from 'universal-cookie';
import { login } from "../actions/user";

export const log_in = (user, rememberMe) => {
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