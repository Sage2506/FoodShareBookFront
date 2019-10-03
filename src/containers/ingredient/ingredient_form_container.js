import { connect } from 'react-redux';
import { post_ingredient, get_ingredient, put_ingredient } from "../../services/ingredient_requests";
import { IngredientFormHOC } from "../../components/ingredients/ingredient_form_hoc";  


const mapStateToProps = (store) => ({
  newIngredient: store.ingredientReducer.newIngredient,
  measuresCatalog: store.measureReducer.measures,
  ingredient: store.ingredientReducer.ingredient,
});

const mapDispatchToProps = (dispatch) => ({
  create_ingredient: (ingredient) => {
    dispatch(post_ingredient(ingredient));
  },
  getIngredient: (id) => {
    dispatch(get_ingredient(id));
  },
  update_ingredient: (id, ingredient) =>{
    dispatch(put_ingredient(id, ingredient));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientFormHOC);
