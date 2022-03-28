
import { GET_DISH, GET_DISHES, DELETE_DISH, ADD_DISH } from "../actions/dish";

const initialDishState = {
  dishes: [],
  pagination: {
    pages: [],
    arrows: {},
  }
}
export const dishReducer = ( state = initialDishState, action ) => {
  switch (action.type) {
    case GET_DISHES:
      return {...state, dishes: action.dishes, pagination: action.pagination, dish:[]};
    case GET_DISH:
      return {...state, dish: action.dish, newDish: []}
    case DELETE_DISH:
      const dishes = state.dishes.filter((dish => dish.id !== action.id))
      return {...state, dishes}
    case ADD_DISH:
      return {...state, newDish: action.dish}
    default:
      return state;
  }
}
export default dishReducer;