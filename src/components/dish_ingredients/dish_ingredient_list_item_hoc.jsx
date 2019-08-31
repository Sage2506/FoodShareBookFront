import React, { Component } from 'react';
import { DishIngredientListItem } from "./dish_ingredient_list_item";

export class DishIngredientListItemHoc extends Component {
  render() {
    return (
      <DishIngredientListItem
        ingredient_name = {this.props.dish_ingredient.ingredient_name}
        ingredient_image = {this.props.dish_ingredient.ingredient_image}
        ingredient_id = {this.props.dish_ingredient.ingredient_id}
        measure_id = {this.props.dish_ingredient.measure_id}
        quantity = {this.props.dish_ingredient.quantity}
        measures = {this.props.measures}
      />
    );
  }
}

export default DishIngredientListItemHoc;
