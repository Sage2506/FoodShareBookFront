import { connect } from "react-redux";
import { get_ingredients_search } from "../../services/ingredient_requests";
import { ReactAutosuggestHOC } from "../../components/common/autosuggest_hoc";

const mapStateToProps = store => {
  return{
    items : store.ingredientReducer.ingredients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    get_items: (name, per_page = 10) => {
      dispatch(get_ingredients_search(name, per_page))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReactAutosuggestHOC)