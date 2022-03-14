import { IPermissions } from "../interfaces/permission_types"
import IUser from "../interfaces/users"

export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const GET_USERS = 'GET_USERS'
export const SET_USER = 'SET_USER'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_USER_PERMISSIONS = 'SET_USER_PERMISSIONS'
export const SET_CURRENT_USER_PERMISSIONS = 'SET_CURRENT_USER_PERMISSIONS'

export const login = ( user  ) => {
  return {
    type: LOG_IN,
    user
  }
}

export const logout = () => {
  return {
    type: LOG_OUT
  }
}

export const setCurrentUser = ( user ) => {
  return{
    type: SET_CURRENT_USER,
    user
  }
}

export const setUser = (data) => {
  return {
    type: SET_USER,
    user: data
  }
}

export const getUsers = (data, pagination) => {
  return {
    type: GET_USERS,
    users: data,
    pagination
  }
}

export const setUserPermissions = permissions => {
  return {
    type: SET_USER_PERMISSIONS,
    permissions
  }
}

export const setCurrentUserPermissions = (permissions ) => {
  return {
    type: SET_CURRENT_USER_PERMISSIONS,
    permissions
  }
}