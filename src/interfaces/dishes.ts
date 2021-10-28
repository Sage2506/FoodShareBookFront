  export interface DishIngredient {
      ingredient_id: number;
      ingredient_name: string;
      ingredient_image: string;
      measure_id: number;
      quantity: number;
  }

export interface IDish {
    id: number;
    name: string;
    description: string;
    recipe: string;
    image?: any;
    dish_ingredients: DishIngredient[];
    user_id: number;
}

