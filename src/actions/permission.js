// Action Types
export const GET_PERMISSIONS = 'GET_PERMISSIONS';
export const GET_PERMISSION = 'GET_PERMISSION';
export const DELETE_PERMISSION = 'DELETE_PERMISSION';
export const ADD_PERMISSION = 'ADD_PERMISSION';

export const getPermissions = (Permissions) => ({
  type: GET_PERMISSIONS,
  Permissions
});

export const getPermission = (Permission) => ({
  type: GET_PERMISSION,
  Permission,
});

export const addPermission = (Permission) => ({
  type: ADD_PERMISSION,
  Permission,
});

export const deletePermission = (id) => ({
  type: DELETE_PERMISSION,
  id,
});
