import { Component } from 'react';
import { connect } from "react-redux";
import { DishShow } from "./show";
import { buildImageSecureUrl } from "../lib/common";
import { dishObject } from '../../models';
import { getDish } from '../../actions/dish';
import { getAndSendAction } from '../../services/common_requests';
 export class DishShowHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: []
    }
  }

  componentDidMount(){
    this.props.getDish(this.props.match.params.id)
  }

   render() {

     let {dish} = this.props
     let {name, image, description, recipe, id, dish_ingredients} = !!dish ? dish : dishObject;
     return (
       <DishShow
          name = {name}
          image = {buildImageSecureUrl(image)}
          description = {description}
          recipe = {recipe}
          id = {id}
          ingredients = {dish_ingredients}
       />
     );
   }
 }

 const mapStateToProps = (store) => {
  return{
      dish: store.dishReducer.dish
  }
}

const mapDispatchToProps = (dispatch  ) => {
  return {
      getDish: id => {
        dispatch( getAndSendAction ({
          path : `dishes/${id}`,
          action : getDish
        }) )
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishShowHOC)
