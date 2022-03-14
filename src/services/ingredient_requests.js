import { api } from "./foodsharebook_api";
import { postIngredient, putIngredient, deleteIngredient } from '../actions/ingredient';
import { showError } from '../components/lib/common';

export const post_ingredient = ingredient => {
  return (dispatch) =>{
    return api.post(`ingredients`, ingredient)
    .then( response => {
      dispatch(postIngredient(response.data))
    })
    .catch(error => {
      dispatch(showError(error))
    })
  }
}

export const put_ingredient = (id, ingredient ) => {
  return (dispatch) => {
    return api.put(`ingredients/${id}`, ingredient)
    .then( response => {
      dispatch(putIngredient(response.data))
    })
    .catch(error => {
      dispatch(showError(error))
    })
  }
}
export const destroy_ingredient = ( id  ) => {
  return dispatch => {
    return api.delete(`ingredients/${id}`)
    .then(response => {
      dispatch(deleteIngredient(id))
    })
    .catch(error => {
      dispatch(showError(error))
    })
  }
}