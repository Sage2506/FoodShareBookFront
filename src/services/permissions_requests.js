import { api } from './foodsharebook_api';
import { showError } from '../components/lib/common';
import { getPermissions } from '../actions/permission';

export const getAllPermissions = (page = 1, per_page = 10, name = "" ) => {
  return async dispatch => {
    try{
      const response = await api.get(`permissions?page=${page}&per_page=${per_page}`)
      const { headers, data } = response
      dispatch(getPermissions(data))
    } catch ( error ){
      dispatch(showError(error))
    }
  }
}

