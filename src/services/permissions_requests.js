import { api } from './foodsharebook_api';
import { paginate, showError } from '../components/lib/common';
import { addPermission, getPermission, getPermissions } from '../actions/permission';
import { put_ingredient } from './ingredient_requests';
import { IPermissions } from '../interfaces/permission_types';

const Path = 'permissions'
export const getAllPermissions = (page = 1, per_page = 10, name = "" ) => {
  return async (dispatch ) => {
    try{
      const response = await api.get(`${Path}?page=${page}&per_page=${per_page}`)
      const { headers, data } = response
      const pagination = paginate(
        parseInt(headers['pagination-total']),
        parseInt(headers['pagination-page']),
        parseInt(headers['pagination-per-page']),
        undefined,
        headers['link']);
      dispatch(getPermissions(data, pagination))
    } catch ( error ){
      dispatch(showError(error))
    }
  }
}

export const getPermissionById = ( id  ) => {
  return async (dispatch ) => {
    try {
      const response = await api.get(`${Path}/${id}`)
      dispatch(getPermission(response.data))
    } catch( error ) {
      dispatch( showError(error) )
    }
  }
}

export const postPermission = (permission ) => {
  return async (dispatch ) => {
    try {
      const response = await api.post(Path, permission);
      dispatch(addPermission(response.data));
    }
    catch (error) {
      dispatch(showError(error))
    }
  }
}

export const updatePermission = (id , permission ) => {
  return async (dispatch ) => {
    try {
      const response = await api.put(`${Path}/${id}`, permission);
      dispatch(addPermission(response.data));
    }
    catch (error) {
      dispatch(showError(error))
    }
  }
}

export const deletePermission = ( permissionId ) => {
  return api.delete(Path+`/`+permissionId);
}