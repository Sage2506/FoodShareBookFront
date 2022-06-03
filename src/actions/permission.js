// Action Types
export const SET_PERMISSIONS = 'SET_PERMISSIONS';
export const GET_PERMISSION = 'GET_PERMISSION';
export const DELETE_PERMISSION = 'DELETE_PERMISSION';
export const ADD_PERMISSION = 'ADD_PERMISSION';

export const setPermissions = (permissions , pagination ) => ({
  type: SET_PERMISSIONS,
  permissions,
  pagination
});

export const getPermission = (permission ) => ({
  type: GET_PERMISSION,
  permission,
});

export const addPermission = (permission) => ({
  type: ADD_PERMISSION,
  permission,
});

export const deletePermission = ( id ) => ({
  type: DELETE_PERMISSION,
  id,
});
