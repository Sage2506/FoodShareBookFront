export const GET_INGREDIENTS = 'GET_INGREDIENTS'
export const GET_INGREDIENT = 'GET_INGREDIENT'
export const ADD_INGREDIENT = 'ADD_INGREDIENT'
export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT'
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT'

export const getIngredients = (data, pagination) => {
  return {
    type : GET_INGREDIENTS,
    ingredients: data,
    pagination: pagination,
  }
}

export const getIngredient =  response => {
  return {
    type : GET_INGREDIENT,
    ingredient : response.data
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