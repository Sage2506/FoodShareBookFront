import { connect } from 'react-redux';
import { get_ingredients } from "../../services/ingredient_requests";
import { IngredientsIndex } from "../../components/ingredients/index";

const mapStateToProps = (store) => ({
  ingredients: store.ingredientReducer.ingredients,
});

const mapDispatchToProps = (dispatch) => ({
  getIngredients: () => {
    dispatch(get_ingredients());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsIndex);
