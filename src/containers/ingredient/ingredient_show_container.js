import { connect } from 'react-redux';
import { get_ingredient } from "../../services/ingredient_requests";
import { IngredientShowHOC } from "../../components/ingredients/ingredient_show_hoc";  


const mapStateToProps = (store) => ({
  ingredient: store.ingredientReducer.ingredient,
  measuresCatalog: store.measureReducer.measures,
});

const mapDispatchToProps = (dispatch) => ({
  getIngredient: (ingredient) => {
    dispatch(get_ingredient(ingredient));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientShowHOC);
