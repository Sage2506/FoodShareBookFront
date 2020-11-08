import React, { Component } from 'react';
import { DishListItem } from "./list_item";
import { PropTypes } from 'prop-types';
export class DishListItemHOC extends Component {
  render() {
    return (
      <DishListItem
        position = {this.props.position}
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

DishListItemHOC.propTypes = {
  position : PropTypes.number.isRequired,
}

export default DishListItemHOC;
