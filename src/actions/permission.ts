// Action Types
export const GET_PERMISSIONS = 'GET_PERMISSIONS';
export const GET_PERMISSION = 'GET_PERMISSION';
export const DELETE_PERMISSION = 'DELETE_PERMISSION';
export const ADD_PERMISSION = 'ADD_PERMISSION';

export const getPermissions = (permissions) => ({
  type: GET_PERMISSIONS,
  permissions
});

export const getPermission = (permission) => ({
  type: GET_PERMISSION,
  permission,
});

export const addPermission = (permission) => ({
  type: ADD_PERMISSION,
  permission,
});

export const deletePermission = (id) => ({
  type: DELETE_PERMISSION,
  id,
});
