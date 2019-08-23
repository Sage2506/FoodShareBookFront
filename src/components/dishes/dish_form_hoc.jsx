 import React, { Component } from 'react';
 import { DishForm } from "./dish_form.js";
 export class DishFormHoc extends Component {
   render() {
     return (
       <DishForm
          // dish_name = {this.props.dish.name}
          // dish_image = {this.props.dish.image}
          // dish_description = {this.props.dish.description}
          // dish_recipe = {this.props.dish.recipe}
          // dish_id = {this.props.dish.id}
       />
     );
   }
 }
 
 export default DishFormHoc;
 