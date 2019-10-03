 import React, { Component } from 'react';
 import { DishShow } from "./dish_show"; 
 import { buildImageSecureUrl } from "../lib/common";
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
     let {name, image, description, recipe, id, dish_ingredients} = dish
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
 
 export default DishShowHOC;
 