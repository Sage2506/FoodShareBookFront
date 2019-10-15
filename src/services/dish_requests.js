import { api } from "./foodsharebook_api";
import { getDish, getDishes, postDish, deleteDish } from "../actions/dish";
import { paginate, showError } from '../components/lib/common';

export const get_dishes = (page = 1, per_page = 10) => {
  return async dispatch =>{
    try {
      const response = await api.get(`dishes?page=${page}&per_page=${per_page}`);
      let pagination = paginate(
        response.headers['pagination-total'],
        response.headers['pagination-page'],
        response.headers['pagination-per-page'],
        undefined,
        response.headers['link']);
      dispatch(getDishes(response.data, pagination));
    }
    catch (error) {
      dispatch(showError(error))
    }
  } 
}

export const get_dish = (id) => {
  return async dispatch =>{
    try {
      const response = await api.get(`dishes/${id}`);
      dispatch(getDish(response.data));
    }
    catch (error) {
      dispatch(showError(error))
    }
  }
}
export const post_dish = dish => {        
  return async (dispatch) =>{
    try {
      const response = await api.post(`dishes`, dish);
      dispatch(postDish(response.data));
    }
    catch (error) {
      dispatch(showError(error))
    }
  }
}
export const delete_dish = id => {        
  return async (dispatch) =>{
    try {
      await api.delete(`dishes/${id}`);
      dispatch(deleteDish(id));
    }
    catch (error) {
      dispatch(showError(error))
    }
  }
}