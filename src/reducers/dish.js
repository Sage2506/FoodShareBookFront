import { GET_DISH, GET_DISHES, DELETE_DISH, ADD_DISH } from "../actions/dish";

const initialDishState = {
    dishes: [],
    dish: []
}
export const dishReducer = ( state = initialDishState, action) => {
    switch (action.type) {
        case GET_DISHES:
            return {...state, dishes: action.dishes};
        case GET_DISH:
            return {...state, dish: action.dish}
        case DELETE_DISH:
            const dishes = state.dishes.filter((dish =>
                dish.id !== action.id))
            return {...state, dishes}
        case ADD_DISH:
            let newDishes = state.dishes.slice();
            newDishes.splice(newDishes.length, 0, action.dish)
            return {...state, dishes: newDishes}
        default:
            return state;
    }
}
export default dishReducer;