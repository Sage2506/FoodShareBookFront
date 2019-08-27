import { connect } from "react-redux";
import { get_dishes } from "../../services/dish_calls";
import DishesIndex from "../../components/dishes/index";


const mapStateToProps = (store) => {
    return{
        dishes: store.dishReducer.dishes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: () => {
            dispatch(get_dishes())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DishesIndex)