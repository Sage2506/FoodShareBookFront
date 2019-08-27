import { api } from "./foodsharebook_api";
import { getDish, getDishes, postDish } from "../actions/dish";

export const get_dishes = () => {        
    return dispatch =>{
        return api.get(`dishes`)
        .then( response => {
            dispatch(getDishes(response.data))
        })
        .catch(error => {
            throw(error)
        })
    }
}

export const get_dish = (id) => {
    return dispatch =>{
        return api.get(`dishes/${id}`)
        .then( response => {
            dispatch(getDish(response.data))
        })
        .catch(error => {
            throw(error)
        })
    }
}
export const post_dish = dish => {        
    return (dispatch) =>{
        return api.post(`dishes`, dish)
        .then( response => {
            dispatch(postDish(response.data))
        })
        .catch(error => {
            throw(error)
        })
    }
}
