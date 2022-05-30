import React, { Component } from 'react';
import { connect } from "react-redux";
import { DishShow } from "./show";
import { buildImageSecureUrl } from "../lib/common";
import { dishObject } from '../../models';
import { setDish } from '../../actions/dish';
import { getAndDispatch } from '../../services/common_requests';
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
        dispatch( getAndDispatch ({
          path : `dishes/${id}`,
          action : setDish
        }) )
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishShowHOC)
