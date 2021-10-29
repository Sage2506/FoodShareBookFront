import { IPagination } from "../interfaces/common";
import { IPermissions } from "../interfaces/permission_types";

// Action Types
export const GET_PERMISSIONS = 'GET_PERMISSIONS';
export const GET_PERMISSION = 'GET_PERMISSION';
export const DELETE_PERMISSION = 'DELETE_PERMISSION';
export const ADD_PERMISSION = 'ADD_PERMISSION';

export const getPermissions = (permissions : IPermissions[], pagination : IPagination) => ({
  type: GET_PERMISSIONS,
  permissions,
  pagination
});

export const getPermission = (permission : IPermissions) => ({
  type: GET_PERMISSION,
  permission,
});

export const addPermission = (permission: IPermissions) => ({
  type: ADD_PERMISSION,
  permission,
});

export const deletePermission = ( id : number ) => ({
  type: DELETE_PERMISSION,
  id,
});
