import { api } from './foodsharebook_api';
import { showError } from '../components/lib/common';
import { addPermission, getPermission, getPermissions } from '../actions/permission';

const Path = 'permissions'
export const getAllPermissions = (page = 1, per_page = 10, name = "" ) => {
  return async dispatch => {
    try{
      const response = await api.get(`${Path}?page=${page}&per_page=${per_page}`)
      const { headers, data } = response
      dispatch(getPermissions(data))
    } catch ( error ){
      dispatch(showError(error))
    }
  }
}

export const getPermissionById = id => {
  return async dispatch => {
    try {
      const response = await api.get(`${Path}/${id}`)
      dispatch(getPermission(response.data))
    } catch( error ) {
      dispatch( showError(error) )
    }
  }
}

export const postPermission = permission => {
  return async (dispatch) =>{
    try {
      const response = await api.post(Path, permission);
      dispatch(addPermission(response.data));
    }
    catch (error) {
      dispatch(showError(error))
    }
  }
}