import { api } from "./foodsharebook_api";
import { setDish, postDish, setDishesAndPagination, removeDish } from "../actions/dish";
import { showError } from '../components/lib/common';
import { deleteAndDispatch, getAndDispatch } from "./common_requests";

const path = 'dishes';

export const getDishes = (params) => {
  return getAndDispatch({
    path,
    action: setDishesAndPagination ,
    params : { page : 1, per_page : 10, ...params}
  })
}

export const getDish = id => {
  return getAndDispatch({
    path : `${path}/${id}`,
    action: setDish
  })
}

export const post_dish = (dish ) => {
  return async (dispatch) => {
    try {
      const response = await api.post(`dishes`, dish);
      dispatch(postDish(response.data));
    }
    catch (error) {
      dispatch(showError(error))
    }
  }
}

export const deleteDish = ( id ) => {
  return deleteAndDispatch({
    path,
    action: removeDish,
    id
  })
}