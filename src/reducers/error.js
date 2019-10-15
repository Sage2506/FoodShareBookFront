import { ERROR, CLEAR_ERROR } from '../actions/error';

const initialErrorState = {
  error: null
};

export const errorReducer = (state = initialErrorState, action) => {
  switch (action.type) {
    case ERROR:
      return {...state, error: action.error}
    case CLEAR_ERROR:
      return {initialErrorState}
    default: 
    return state;
  }
}