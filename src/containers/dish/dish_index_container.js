import { connect } from "react-redux";
import { get_dishes } from "../../services/dish_requests";
import DishesIndex from "../../components/dishes/index";


const mapStateToProps = (store) => {
    return{
        dishes: store.dishReducer.dishes,
        pagination: store.dishReducer.pagination
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