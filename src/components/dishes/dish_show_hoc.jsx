 import React, { Component } from 'react';
 import { DishShow } from "./dish_show"; 
 export class DishShowHoc extends Component {
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
     return (
       <DishShow
          dish_name = {this.props.dish.name}
          dish_image = {this.props.dish.image}
          dish_description = {this.props.dish.description}
          dish_recipe = {this.props.dish.recipe}
          dish_id = {this.props.dish.id}
          dish_ingredients = {this.props.dish.dish_ingredients}
       />
     );
   }
 }
 
 export default DishShowHoc;
 