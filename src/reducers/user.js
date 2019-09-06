import { LOG_IN, LOG_OUT } from "../actions/user";

const initialUserState = {
    user: {},
    authenticated: false,
}

export const userReducer = ( state = initialUserState, action ) => {
  switch(action.type){
      case LOG_IN:
        return {...state, authenticated: true}
      case LOG_OUT:
        return {...state, authenticated: false}
      default:
        return state;
  }
}

export default userReducer;