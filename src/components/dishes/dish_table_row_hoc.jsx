import React, { Component } from 'react';
import { DishTableRow } from "./dish_table_row";
import { PropTypes } from 'prop-types';
export class DishTabeRowHOC extends Component {
  render() {
    let { position , dish } = this.props;
    let { name, image, description, recipe, id, dish_ingredients } = dish
    return (
        <DishTableRow
          position = { position }
          name = { name }
          image = { image }
          description = { description }
          recipe = { recipe }
          id = { id }
          ingredients = { dish_ingredients }
        />
    );
  }
}

DishTabeRowHOC.propTypes = {
  position : PropTypes.number.isRequired,
}

export default DishTabeRowHOC;
