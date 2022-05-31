export const SET_INGREDIENTS = 'SET_INGREDIENTS'
export const SET_INGREDIENT = 'SET_INGREDIENT'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'

export const setIngredients = (data, pagination) => {
  return {
    type : SET_INGREDIENTS,
    ingredients: data,
    pagination: pagination,
  }
}

export const setIngredient =  data => {
  return {
    type : SET_INGREDIENT,
    ingredient : data
  }
}

export const addIngredient = ingredient => {
  return {
    type : ADD_INGREDIENT,
    ingredient : ingredient
  }
}