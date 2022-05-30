import {
  SET_INGREDIENTS,
  SET_INGREDIENT,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  UPDATE_INGREDIENT,
} from '../actions/ingredient';

const initialIngredientState = {
  ingredients: [],
  ingredient: {},
  newIngredient: {},
  pagination: {
    pages: [],
    arrows: {},
  }
};

export const ingredientReducer = (state = initialIngredientState, action ) => {
  switch (action.type) {
    case SET_INGREDIENTS:
      return { ...state, ingredients: action.ingredients, pagination: action.pagination , ingredient:[] };
    case SET_INGREDIENT:
      return { ...state, ingredient: action.ingredient, newIngredient: [] };
    case DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ingredient) => ingredient.id !== action.id),
      };
    case ADD_INGREDIENT:
      return { ...state, newIngredient: action.ingredient };
    case UPDATE_INGREDIENT:
      return {...state, newIngredient: action.ingredient };
    default:
      return state;
  }
};
export default ingredientReducer;
