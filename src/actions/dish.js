// Action Types
export const GET_DISHES = 'GET_DISHES';
export const DELETE_DISH = 'DELETE_DISH';
export const GET_DISH = 'GET_DISH';
export const ADD_DISH = 'ADD_DISH';
// Action Creators
export const removeDish = ( id  ) => ({
  type: DELETE_DISH,
  id,
});

export const setDish = data => ({
  type: GET_DISH,
  dish: data,
});

export const postDish = (dish ) => ({
  type: ADD_DISH,
  dish,
});

export const setDishesAndPagination = (data, pagination) => {
  return {
    type: GET_DISHES,
    dishes: data,
    pagination,
  }
}
