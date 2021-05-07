import { GET_PERMISSION, GET_PERMISSIONS, ADD_PERMISSION, DELETE_PERMISSION } from '../actions/permission';

const initialPermissionState = {
  permissions: [],
  permission : {},
  newPermission : {}
}

export const  permissionReducer = ( state = initialPermissionState, action ) => {
  switch (action.type) {
    case GET_PERMISSION:
      return {...state, permission: action.permission, newPermission: {}};
    case GET_PERMISSIONS:
      return {...state, permissions: action.permissions};
    case ADD_PERMISSION:
      return {...state, newPermission: action.permission};
    case DELETE_PERMISSION:
      return {...state, dishes : state.dishes.filter(( dish => dish.id !== action.id))}
    default:
      return state;
  }
};

export default permissionReducer;