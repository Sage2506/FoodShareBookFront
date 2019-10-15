import { connect } from "react-redux";
import { get_dishes, delete_dish } from "../../services/dish_requests";
import { clearError } from '../../actions/error';
import DishesIndex from "../../components/dishes/index";


const mapStateToProps = (store) => {
    return{
        dishes: store.dishReducer.dishes,
        pagination: store.dishReducer.pagination,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDishes: (page = 1, per_page = 10) => {
            dispatch(get_dishes(page, per_page))
        },
        clearError: () => {
            dispatch(clearError())
        },
        deleteDish: (id) =>{
            dispatch(delete_dish(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DishesIndex)