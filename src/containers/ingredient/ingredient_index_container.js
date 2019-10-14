import { connect } from 'react-redux';
import { get_ingredients, destroy_ingredient } from "../../services/ingredient_requests";
import { IngredientsIndex } from "../../components/ingredients/index";

const mapStateToProps = (store) => ({
  ingredients: store.ingredientReducer.ingredients,
  pagination: store.ingredientReducer.pagination
});

const mapDispatchToProps = (dispatch) => ({
  getIngredients: (page = 1, per_page = 10) => {
    dispatch(get_ingredients(page, per_page));
  },
  deleteIngredient: (id) => {
    dispatch(destroy_ingredient(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsIndex);
