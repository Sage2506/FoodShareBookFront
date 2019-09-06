import { api } from "./foodsharebook_api";
import { getDish, getDishes, postDish } from "../actions/dish";

export const get_dishes = () => {        
    return async dispatch =>{
        try {
            const response = await api.get(`dishes`);
            dispatch(getDishes(response.data));
        }
        catch (error) {
            throw (error);
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
            throw (error);
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
            throw (error);
        }
    }
}
