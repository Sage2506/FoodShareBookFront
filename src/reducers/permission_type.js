import { GET_PERMISSION_TYPE, GET_PERMISSION_TYPES, ADD_PERMISSION_TYPE, DELETE_PERMISSION_TYPE } from '../actions/permission_type';

const initialPermissionTypeState = {
  permissionTypes: [],
  permissionType : {},
  newPermissionType : {}
}

export const  permissionTypeReducer = ( state = initialPermissionTypeState, action ) => {
  switch (action.type) {
    case GET_PERMISSION_TYPE:
      return {...state, permissionType: action.permissionType, newPermissionType: {}};
    case GET_PERMISSION_TYPES:
      return {...state, permissionTypes: action.permissionTypes};
    case ADD_PERMISSION_TYPE:
      return {...state, newPermissionType: action.permissionType};
    case DELETE_PERMISSION_TYPE:
      return {...state, dishes : state.dishes.filter(( dish => dish.id !== action.id))}
    default:
      return state;
  }
};

export default permissionTypeReducer;