import { setDish, addDish, setDishesAndPagination } from "../actions/dish";
import { getAndDispatch, postAndDispatch } from "./common_requests";
import { apiDelete } from "./foodsharebook_api";

const path = 'dishes';

export const getDishes = params => getAndDispatch({ path, action: setDishesAndPagination, params: { page: 1, per_page: 10, ...params } })

export const getDish = id => getAndDispatch({ path: `${path}/${id}`, action: setDish })

export const postDish = data => postAndDispatch({ path: `${path}`, action: addDish, data })

export const deleteDish = id => apiDelete({path,id})