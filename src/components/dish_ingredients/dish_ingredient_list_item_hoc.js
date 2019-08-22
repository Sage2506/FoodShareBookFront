import React, { Component } from 'react';
import { DishIngredientListItem } from "./dish_ingredient_list_item";

export class DishIngredientListItemHoc extends Component {
  render() {
    return (
      <DishIngredientListItem
        // ingredient_name = {this.props.ingredient.name}
        // ingredient_description = {this.props.ingredient.description}
        // ingredient_image = {this.props.ingredient.image}
        // ingredient_id = {this.props.ingredient.ingredient_id}
        // measure_name = {this.props.ingredient.measure_name}
        // quantity = {this.props.ingredient.quantity}
      />
    );
  }
}

export default DishIngredientListItemHoc;
