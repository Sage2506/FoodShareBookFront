import { connect } from "react-redux";
import { get_ingredients } from "../../services/ingredient_requests";
import { ReactAutosuggestHOC } from "../../components/common/autosuggest_hoc";

const mapStateToProps = store => {
  return{
    ingredients : store.ingredientReducer.ingredients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_ingredients: () => {
      dispatch(get_ingredients())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactAutosuggestHOC)