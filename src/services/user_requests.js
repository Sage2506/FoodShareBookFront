import {Cookies} from 'react-cookie';
import { api } from './foodsharebook_api';
import { login, getUsers, setCurrentUser, setUser, logout } from '../actions/user';
import { paginate, showError } from '../components/lib/common';

const Path = 'users';

export const logIn = (user, rememberMe) => {
  return async dispatch => {
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

export const getCurrentUserData = () => {
  return async dispatch => {
    try {
      const response = await api.get(Path+`/current_user_data`)
      const { status, data } = response
      if( status === 200 && data !== null ){
        dispatch(setCurrentUser(data))
      } else {
        dispatch(logout())
      }
    }catch (error) {
      dispatch(showError(error))
    }
  }
}

export const getAllUsers = (page = 1, per_page = 10, name = '') => {
  return async dispatch => {
    try{
      const response = await api.get(Path+`?page=${page}&per_page${per_page}`)
      const { headers , data } = response
      let pagination = paginate(
        headers['pagination-total'],
        headers['pagination-page'],
        headers['pagination-per-page'],
        undefined,
        headers['link']);

      dispatch(getUsers(data, pagination))
    } catch(error){
      dispatch(showError(error))
    }
  }
}

export const getUserDataById = id => {
  return async dispatch => {
    try {
      const response = await api.get(Path+`/`+id)
      const { data } = response
      dispatch(setUser(data))
    } catch ( error ) {
      console.log(error);
      dispatch(showError(error))
    }
  }
}

export default logIn;
