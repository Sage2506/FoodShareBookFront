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
        getDishes: (page = 1, per_page = 10) => {
            dispatch(get_dishes(page, per_page))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DishesIndex)