import {connect} from 'react-redux';
import { post_ingredient } from "../../services/ingredient_requests";
import { IngredientFormHOC } from "../../components/ingredients/ingredient_form_hoc";  


const mapStateToProps = store => {
  return {
    newIngredient: store.ingredientReducer.newIngredient,
    measuresCatalog: store.measureReducer.measures
  }
}

const mapDispatchToProps = dispatch => {
  return {
    create_ingredient: ingredient => {
      dispatch(post_ingredient(ingredient))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IngredientFormHOC)