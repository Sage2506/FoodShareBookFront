import React, { Component } from 'react';
import { DishTableRow } from "./table_row";
import { PropTypes } from 'prop-types';
export class DishTabeRowHOC extends Component {
  render() {
    let { position , dish, handleOpen } = this.props;
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
          handleOpen = {handleOpen}
        />
    );
  }
}

DishTabeRowHOC.propTypes = {
  position : PropTypes.number.isRequired,
}

export default DishTabeRowHOC;
