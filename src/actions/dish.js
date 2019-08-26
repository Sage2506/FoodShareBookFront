// Action Types
export const GET_DISHES = 'GET_DISHES';
export const DELETE_DISH = 'DELETE_DISH';
export const GET_DISH = 'GET_DISH';
export const ADD_DISH = 'ADD_DISH';
// Action Creators
export const getDishes = (dishes) => {
	return {
		type: GET_DISHES,
		dishes: dishes
	}
}

export const deleteDish = (id) => {
	return {
		type: DELETE_DISH,
		id: id
	}
}

export const getDish = (dish) => {
	return {
		type: GET_DISH,
		dish: dish
	}
}

export const postDish = (dish) => {
    return {
        type: ADD_DISH,
        dish: dish
    }
}