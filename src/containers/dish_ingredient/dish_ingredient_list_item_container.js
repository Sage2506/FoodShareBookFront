import { connect } from "react-redux";
import { DishIngredientListItemHoc } from "../../components/dish_ingredients/dish_ingredient_list_item_hoc";


const mapStateToProps = (store) => {
    return{
        measures: store.measureReducer.measures
    }
}

export default connect(
    mapStateToProps,
    null
)(DishIngredientListItemHoc)