import { api } from "./foodsharebook_api";
import { getIngredient, getIngredients, postIngredient, putIngredient, deleteIngredient } from '../actions/ingredient';
import { paginate, showError } from '../components/lib/common';

export const get_ingredients = (page, per_page ) => {
  return async (dispatch : Function) => {
    try{

      const response = await api.get(`ingredients?page=${page}&per_page=${per_page}`)
      const { headers , data } = response
      const pagination = paginate(
        parseInt(headers['pagination-total']),
        parseInt(headers['pagination-page']),
        parseInt(headers['pagination-per-page']),
        undefined,
        headers['link']);
      dispatch(getIngredients(data, pagination))
    }
    catch(error) {
      dispatch(showError(error))
    }
  }
}

export const get_ingredients_search = (name, per_page) => {
  return (dispatch) =>{
    return api.get(`ingredients?q[name_cont]=${name}&per_page=${per_page}`)
    .then( response => {
      dispatch(getIngredients(response.data))
    })
    .catch(error => {
      dispatch(showError(error))
    })
  }
}

export const get_ingredient = ( id : number ) => {
  return (dispatch) =>{
    return api.get(`ingredients/${id}`)
    .then( response => {
      dispatch(getIngredient(response.data))
    })
    .catch(error => {
      dispatch(showError(error))
    })
  }
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
export const destroy_ingredient = ( id : number ) => {
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