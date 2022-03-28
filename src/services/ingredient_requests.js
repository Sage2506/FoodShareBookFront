import { api } from "./foodsharebook_api";
import { postIngredient, putIngredient, deleteIngredient, setIngredients, setIngredient } from '../actions/ingredient';
import { showError } from '../components/lib/common';
import { getAndSendAction } from "./common_requests";

const path = 'ingredients';

export const getIngredients = params => {
  return getAndSendAction({
    path,
    action: setIngredients,
    params : { page: 1, per_page: 10, ...params }
  })
}

export const getIngredient = id => {
  return getAndSendAction({
    path : `${path}/${id}`,
    action: setIngredient
  })
}

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