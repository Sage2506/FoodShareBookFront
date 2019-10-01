// Action Types
export const GET_DISHES = 'GET_DISHES';
export const DELETE_DISH = 'DELETE_DISH';
export const GET_DISH = 'GET_DISH';
export const ADD_DISH = 'ADD_DISH';
// Action Creators
export const getDishes = (dishes) => ({
  type: GET_DISHES,
  dishes,
});

export const deleteDish = (id) => ({
  type: DELETE_DISH,
  id,
});

export const getDish = (dish) => ({
  type: GET_DISH,
  dish,
});

export const postDish = (dish) => ({
  type: ADD_DISH,
  dish,
});
