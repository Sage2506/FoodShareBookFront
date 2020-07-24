import api from "./foodsharebook_api"
import { setRoles, setRole } from "../actions/role";
import { showError } from "../components/lib/common";

export const getRoles = () => {
  return async dispatch => {
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
  return async dispatch => {
    try {
      const response = await api.get(`roles/${id}`);
      const { status, data} = response
      if(status === 200){
        dispatch(setRole(data))
      } else{
        dispatch(showError("Algun error"))
      }
    } catch(error){
      dispatch(showError(error))
    }
  }
}