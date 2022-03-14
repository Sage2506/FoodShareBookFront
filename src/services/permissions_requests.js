import { api } from './foodsharebook_api';
import { showError } from '../components/lib/common';
import { addPermission } from '../actions/permission';

const Path = 'permissions'

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