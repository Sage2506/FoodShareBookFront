import { connect } from "react-redux";
import { get_dish } from "../../services/dish_calls";
import DishShowHoc from "../../components/dishes/dish_show_hoc";


const mapStateToProps = (store) => {
    return{
        dish: store.dishReducer.dish
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDish: id => {
            dispatch(get_dish(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DishShowHoc)