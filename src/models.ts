import { IDish } from "./interfaces/dishes";
import { IIngredients } from "./interfaces/ingredients";
import { IMeasure } from "./interfaces/measure";

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
    id: 0,
    name: "",
    description: "",
    image: "",
    measures: []
}

export const measureObject : IMeasure = {
    id : 0,
    name : "Cargando medida..",
    group : ""
}