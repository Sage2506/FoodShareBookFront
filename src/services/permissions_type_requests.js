import { api } from './foodsharebook_api';
import { showError } from '../components/lib/common';
import { getPermissionTypes } from '../actions/permission_type';

const Path = "permission_types"

export const getAllPermissionTypes = () => {
  return async dispatch => {
    try {
      const response = await api.get(Path)
      const { headers, data } = response
      dispatch( getPermissionTypes(data) )
    } catch ( error ) {
      dispatch( showError(error) )
    }
  }
}
