import {
  GET_INGREDIENTS,
  GET_INGREDIENT,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
} from '../actions/ingredient';

const initialIngredientState = {
  ingredients: [],
  ingredient: {},
  newIngredient: {},
};

export const ingredientReducer = (state = initialIngredientState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return { ...state, ingredients: action.ingredients };
    case GET_INGREDIENT:
      return { ...state, ingredient: action.ingredient, newIngredient: [] };
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ingredient) => ingredient.id !== action.id),
      };
    case ADD_INGREDIENT:
      return { ...state, newIngredient: action.ingredient };
    default:
      return state;
  }
};
export default ingredientReducer;
