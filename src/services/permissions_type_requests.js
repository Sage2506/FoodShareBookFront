import { api } from './foodsharebook_api';
import { showError } from '../components/lib/common';
import { getPermissionTypes } from '../actions/permission_type';
import { setCurrentUserPermissions } from '../actions/user';

const Path = "permission_types"

export const getAllPermissionTypes = () => {
  return async (dispatch : any) => {
    try {
      const response = await api.get(Path)
      const { headers, data } = response
      dispatch( getPermissionTypes(data) )
    } catch ( error ) {
      dispatch( showError(error) )
    }
  }
}

export const getCurrentUserPermissionByType = ( typeId : number) => {
  return async (dispatch : any) => {
    try {
      const response = await api.get(Path+`/`+typeId+`/current_user_permissions`)
      const { headers, data } = response
      dispatch( setCurrentUserPermissions(data) )
    } catch ( error ) {
      dispatch( showError(error) )
    }
  }
}
