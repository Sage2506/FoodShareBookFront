import { api } from "./foodsharebook_api";
import { setDish, addDish, setDishesAndPagination, removeDish } from "../actions/dish";
import { showError } from '../components/lib/common';
import { deleteAndDispatch, getAndDispatch, postAndDispatch } from "./common_requests";

const path = 'dishes';

export const getDishes = (params) => {
  return getAndDispatch({
    path,
    action: setDishesAndPagination,
    params: { page: 1, per_page: 10, ...params }
  })
}

export const getDish = id => {
  return getAndDispatch({
    path: `${path}/${id}`,
    action: setDish
  })
}

export const post_dish = (dish) => {
  return postAndDispatch({
    path: `${path}`,
    action: addDish,
    data: dish
  })
}

export const deleteDish = (id) => {
  return deleteAndDispatch({
    path,
    action: removeDish,
    id
  })
}