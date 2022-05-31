import {
  SET_INGREDIENTS,
  SET_INGREDIENT,
  ADD_INGREDIENT,
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
    case ADD_INGREDIENT:
      return { ...state, newIngredient: action.ingredient };
    default:
      return state;
  }
};
export default ingredientReducer;
