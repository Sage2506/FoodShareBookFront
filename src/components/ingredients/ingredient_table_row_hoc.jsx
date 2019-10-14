import React, { Component } from 'react';
import { IngredientTableRow } from "./ingredient_table_row";
import { PropTypes } from 'prop-types';
export class IngredientTableRowHOC extends Component {
  render() {
    let {position, ingredient, handleOpen} = this.props
    let {name, description, id} = ingredient
    return (
        <IngredientTableRow
          position = {position}
          id = {id}
          name = {name}
          description = {description}
          handleOpen = {handleOpen}
        />
    );
  }
}

IngredientTableRowHOC.propTypes = {
  position : PropTypes.number.isRequired,
}

export default IngredientTableRowHOC;
