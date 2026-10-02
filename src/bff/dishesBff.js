import { apiGet } from '../services/foodsharebook_api';

export const getDishSummaries = async () => {
  const response = await apiGet({
    path: 'dishes',
    params: { page: 1, per_page: 10 }
  });

  return response.data.map((dish) => ({
    id: dish.id,
    name: dish.name,
    imageUrl: dish.image,
    ingredientCount: dish.dish_ingredients.length
  }));
};