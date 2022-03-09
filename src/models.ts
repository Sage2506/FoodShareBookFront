import { IDish } from "./interfaces/dishes";
import { IIngredients } from "./interfaces/ingredients";

export const dishObject : IDish = {
    name: "",
    image: "",
    description: "",
    recipe: "",
    id: 0,
    user_id: 0,
    dish_ingredients : []
}

export const ingredientObject : IIngredients = {
    id: undefined,
    name: "",
    description: "",
    image: "",
    measures: []
}