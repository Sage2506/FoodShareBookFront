import axios from 'axios';
import { api } from "./foodsharebook_api";
import { getDish, getDishes, postDish, deleteDish } from "../actions/dish";
let AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJleHAiOjE1NjY5MjgzOTAsImlzcyI6Imlzc3Vlcl9uYW1lIiwiYXVkIjoiY2xpZW50In0.K648ypZ0Q65ell-kjpUbLUbfFaYbPr_Puet1R3K-zM0';

axios.defaults.baseURL = 'https://foodsharebook.herokuapp.com/api/v1/';
//axios.defaults.baseURL = 'http://localhost:3000/api/v1/';
//axios.defaults.baseURL = 'https://192.168.1.209:3000/api/v1/';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const get_dishes = () => {        
    return (dispatch) =>{
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
    return (dishpatch) =>{
        return api.get(`dishes/${id}`)
        .then( response => {
            dishpatch(getDish(response.data))
        })
        .catch(error => {
            throw(error)
        })
    }
}
export const post_dish = ({dish}) => {    
    return api.get(`dishes`, dish)
    .then( response => {return response.data})
}
export const get_ingredient = (id) => {
    return api.get(`ingredients/${id}`)
    .then(response => {return response.data})
}
export const post_ingredient = (ingredient) => {
    return api.get(`ingredients`,ingredient)
    .then(response => {return response.data})
}
export const get_measures = () => {
    return api.get(`measures`)
    .then(response => {return response.data})
}