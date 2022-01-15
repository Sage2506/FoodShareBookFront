 import React, { Component } from 'react';
 import { connect } from "react-redux";
import { get_dish } from "../../services/dish_requests";
 import { DishShow } from "./show";
 import { buildImageSecureUrl } from "../lib/common";
import { dishObject } from '../../models';
 export class DishShowHOC extends Component<any, any> {
  constructor(props: any) {
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

 const mapStateToProps = (store:any) => {
  return{
      dish: store.dishReducer.dish
  }
}

const mapDispatchToProps = (dispatch :any ) => {
  return {
      getDish: (id : number) => {
          dispatch(get_dish(id))
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishShowHOC)
