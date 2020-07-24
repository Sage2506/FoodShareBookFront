import { SET_ROLES, SET_ROLE } from "../actions/role"

const initialRoleState = {
  roles: [],
  role: {
    id: null,
    name: null,
    permissions: []
    }
}

export const roleReducer = ( state = initialRoleState, action ) => {
  switch(action.type){
    case SET_ROLES:
      return {
        ...state,
        roles: action.roles
      }
    case SET_ROLE:
      return {
        ...state,
        role: action.role
      }
    default:
      return state;
  }
}