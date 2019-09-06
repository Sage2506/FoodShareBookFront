export const GET_INGREDIENTS = 'GET_INGREDIENTS'
export const GET_INGREDIENT = 'GET_INGREDIENT'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'

export const getIngredients = ingredients => {
  return {
    type : GET_INGREDIENTS,
    ingredients: ingredients
  }
}

export const getIngredient =  ingredient => {
  return {
    type : GET_INGREDIENT,
    ingredient : ingredient
  }
}

export const postIngredient = ingredient => {
  return {
    type : ADD_INGREDIENT,
    ingredient : ingredient
  }
}

export const destroyIngredient = id => {
  return {
    type : DELETE_INGREDIENT,
    id : id
  }
}