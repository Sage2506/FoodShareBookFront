import { connect } from "react-redux";
import { post_dish } from "../../services/dish_requests";
import { DishFormHOC } from "../../components/dishes/dish_form_hoc";

const mapStateToProps = store => {
    return {
        dish: store.dishReducer.dish,
        newDish: store.dishReducer.newDish,
        measures: store.measureReducer.measures
    }
}

const mapDispatchToProps = dispatch => {
    return {
        create_dish: dish =>{       
            dispatch(post_dish(dish))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DishFormHOC)