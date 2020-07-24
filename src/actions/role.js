export const SET_ROLES = 'SET_ROLES'
export const SET_ROLE = 'SET_ROLE'

export const setRoles = ( roles ) => {
  return {
    type: SET_ROLES,
    roles
  }
}

export const setRole = ( role ) => {
  return {
    type: SET_ROLE,
    role
  }
}