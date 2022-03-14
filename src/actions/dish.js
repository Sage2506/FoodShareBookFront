// Action Types
export const GET_DISHES = 'GET_DISHES';
export const DELETE_DISH = 'DELETE_DISH';
export const GET_DISH = 'GET_DISH';
export const ADD_DISH = 'ADD_DISH';
// Action Creators
export const deleteDish = ( id  ) => ({
  type: DELETE_DISH,
  id,
});

export const getDish = response => ({
  type: GET_DISH,
  dish: response.data,
});

export const postDish = (dish ) => ({
  type: ADD_DISH,
  dish,
});

export const setDishesAndPagination = args => {
  const { data , pagination } = args
  return {
    type: GET_DISHES,
    dishes: data,
    pagination,
  }
}
