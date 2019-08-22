import React, { Component } from 'react';
import { DishListItem } from "./dish_list_item";
export class DishListItemHOC extends Component {
  render() {
    return (
        <DishListItem
          // dish_name = {this.props.dish.name}
          // dish_image = {this.props.dish.image}
          // dish_description = {this.props.dish.description}
          // dish_recipe = {this.props.dish.recipe}
          // dish_id = {this.props.dish.id}
        />
    );
  }
}

export default DishListItemHOC;
