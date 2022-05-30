// Action Types
export const GET_PERMISSION_TYPES = 'GET_PERMISSION_TYPES';
export const GET_PERMISSION_TYPE = 'GET_PERMISSION_TYPE';
export const DELETE_PERMISSION_TYPE = 'DELETE_PERMISSION_TYPE';
export const ADD_PERMISSION_TYPE = 'ADD_PERMISSION_TYPE';

export const getPermissionTypes = (permissionTypes) => ({
  type: GET_PERMISSION_TYPES,
  permissionTypes
});

export const getPermissionType = (permissionType) => ({
  type: GET_PERMISSION_TYPE,
  permissionType,
});

export const addPermissionType = (permissionType) => ({
  type: ADD_PERMISSION_TYPE,
  permissionType,
});

export const deletePermissionType = ( id ) => ({
  type: DELETE_PERMISSION_TYPE,
  id,
});

