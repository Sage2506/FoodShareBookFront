export const SET_INGREDIENTS = 'SET_INGREDIENTS'
export const SET_INGREDIENT = 'SET_INGREDIENT'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'

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

export const postIngredient = ingredient => {
  return {
    type : ADD_INGREDIENT,
    ingredient : ingredient
  }
}

export const putIngredient = ingredient => {
  return {
    type : UPDATE_INGREDIENT,
    ingredient: ingredient
  }
}
export const deleteIngredient = ( id  ) => {
  return {
    type : DELETE_INGREDIENT,
    id : id
  }
}