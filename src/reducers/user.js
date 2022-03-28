import { LOG_IN, LOG_OUT, GET_USERS, SET_CURRENT_USER, SET_USER, SET_USER_PERMISSIONS, SET_CURRENT_USER_PERMISSIONS } from "../actions/user";

const initialUserState  = {
    current_user: {
      id: 0,
      dishes_ids: [],
      email: "",
      role_id: 0,
      permissions: []
    },
    user: {
      id: 0,
      dishes_ids: [],
      email: "",
      role_id: 0,
      permissions: []
    },
    authenticated: false,
    users: [],
    pagination: {
      pages: [],
      arrows: { arrow: "" },
    }
}

export const userReducer = ( state = initialUserState, action ) => {
  switch(action.type){
      case LOG_IN:
        return {
          ...state,
          authenticated: true
        }
      case LOG_OUT:
        return {
          ...state,
          authenticated: false}
      case GET_USERS:
        return {
          ...state,
          users: action.users,
          pagination: action.pagination
        }
      case SET_USER:
        return {
          ...state,
          user: {...state.user,...action.user}
        }
      case SET_CURRENT_USER:
        return {
          ...state,
          current_user: {...action.user, permissions: []}
        }
      case SET_USER_PERMISSIONS:
        return {
          ...state,
          user : {
            ...state.user,
            permissions : action.permissions
          }
        }
      case SET_CURRENT_USER_PERMISSIONS:
      return {
        ...state,
        current_user : {
          ...state.current_user,
          permissions : action.permissions
        }
      }
      default:
        return state;
  }
}

export default userReducer;