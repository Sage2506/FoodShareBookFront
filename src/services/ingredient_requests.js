import { apiDelete } from "./foodsharebook_api";
import { addIngredient, setIngredients, setIngredient } from '../actions/ingredient';
import { getAndDispatch, postAndDispatch, putAndDispatch } from "./common_requests";

const path = 'ingredients';

export const putIngredient = params => putAndDispatch({ path, action: addIngredient, ...params })

export const deleteIngredient = id => apiDelete({ path, id });

export const getIngredients = params => getAndDispatch({ path, action: setIngredients, params: { page: 1, per_page: 10, ...params } })

export const getIngredient = id => getAndDispatch({ path: `${path}/${id}`, action: setIngredient })

export const postIngredient = data => postAndDispatch({ path, action: addIngredient, data })