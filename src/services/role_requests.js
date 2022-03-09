import api from "./foodsharebook_api"
import { setRoles, setRole } from "../actions/role";
import { showError } from "../components/lib/common";
import { convertPermisionStringToList } from "../lib/common";

export const getRoles = () => {
  return async (dispatch : Function) => {
    try {
      const response = await api.get(`roles`);
      const { status, data} = response
      if(status === 200){
        dispatch(setRoles(data))
      } else{
        dispatch(showError("Algun error"))
      }
    } catch(error){
      dispatch(showError(error))
    }
  }
}

export const getRole = ( id ) => {
  return async (dispatch : Function) => {
    try {
      const response = await api.get(`roles/${id}`);
      const { status, data} = response
      if(status === 200){
        data.permissions = convertPermisionStringToList(data.permissions)
        dispatch(setRole(data))
      } else{
        dispatch(showError("Algun error"))
      }
    } catch(error){
      dispatch(showError(error))
    }
  }
}