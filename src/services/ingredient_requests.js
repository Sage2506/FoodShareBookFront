import { api } from "./foodsharebook_api";
import { addIngredient, putIngredient, deleteIngredient, setIngredients, setIngredient } from '../actions/ingredient';
import { showError } from '../components/lib/common';
import { getAndDispatch, postAndDispatch } from "./common_requests";

const path = 'ingredients';


export const put_ingredient = (id, ingredient) => {
  return (dispatch) => {
    return api.put(`ingredients/${id}`, ingredient)
      .then(response => {
        dispatch(putIngredient(response.data))
      })
      .catch(error => {
        dispatch(showError(error))
      })
  }
}

export const destroy_ingredient = (id) => {
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

export const getIngredients = params => getAndDispatch({ path, action: setIngredients, params: { page: 1, per_page: 10, ...params } })

export const getIngredient = id => getAndDispatch({path: `${path}/${id}`,action: setIngredient})

export const postIngredient = data => postAndDispatch({ path, action: addIngredient, data })