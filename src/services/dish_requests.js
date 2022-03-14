import { api } from "./foodsharebook_api";
import { getDish, getDishes, postDish, deleteDish } from "../actions/dish";
import { paginate, showError } from '../components/lib/common';
import { IDish } from "../interfaces/dishes";

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
export const delete_dish = ( id ) => {
  return async (dispatch) => {
    try {
      await api.delete(`dishes/${id}`);
      dispatch(deleteDish(id));
    }
    catch (error) {
      dispatch(showError(error))
    }
  }
}