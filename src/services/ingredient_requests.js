import { api } from "./foodsharebook_api";
import { getIngredient, getIngredients, postIngredient, destroyIngredient } from "../actions/ingredient";

export const get_ingredients = () => {        
  return (dispatch) =>{
    return api.get(`ingredients`)
    .then( response => {
      dispatch(getIngredients(response.data))
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const get_ingredients_search = (name, per_page) => {        
  return (dispatch) =>{
    return api.get(`ingredients?q[name_cont]=${name}&per_page=${per_page}`)
    .then( response => {
      dispatch(getIngredients(response.data))
    })
    .catch(error => {
      throw(error)
    })
  }
}

export const get_ingredient = (id) => {
  return (dispatch) =>{
    return api.get(`ingredients/${id}`)
    .then( response => {
      dispatch(getIngredient(response.data))
    })
    .catch(error => {
      throw(error)
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
      throw(error)
    })
  }
}
export const destroy_ingredient = id => {
  return dispatch => {
    return api.delete(`ingredients/${id}`)
    .then(response => {
      dispatch(destroyIngredient(id))
    })
    .catch(error => {
      throw(error)
    })
  }
}