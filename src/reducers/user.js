import { LOG_IN, LOG_OUT, GET_USERS, SET_CURRENT_USER } from "../actions/user";

const initialUserState = {
    current_user: {
      id:null,
      dishes_ids: [],
      email:null,
      role_id:null,
      permissions: []
    },
    user: {},
    authenticated: false,
    users: [],
    pagination: {
      pages: [],
      arrows: {},
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
      case SET_CURRENT_USER:
        return {
          ...state,
          current_user: action.user
        }
      default:
        return state;
  }
}

export default userReducer;