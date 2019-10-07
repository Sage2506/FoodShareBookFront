import React, { Component } from 'react';
import { DishIngredientListItem } from "./dish_ingredient_list_item";
import { buildImageSecureUrl } from '../lib/common';
export class DishIngredientListItemHoc extends Component {
  render() {
    let {
      dish_ingredient,
      measures
    } = this.props

    let {
      ingredient_id,
      ingredient_name,
      ingredient_image,
      measure_id,
      quantity,
    } = dish_ingredient

    return (
      <DishIngredientListItem
        ingredient_name = {ingredient_name}
        ingredient_image = {buildImageSecureUrl(ingredient_image)}
        ingredient_id = {ingredient_id}
        measure_id = {measure_id}
        quantity = {quantity}
        measures = {measures}
      />
    );
  }
}

export default DishIngredientListItemHoc;
