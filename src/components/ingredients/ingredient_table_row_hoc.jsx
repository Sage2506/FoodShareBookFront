import React, { Component } from 'react';
import { IngredientTableRow } from "./ingredient_table_row";
import { PropTypes } from 'prop-types';
export class IngredientTableRowHOC extends Component {
  render() {
    let {position, ingredient} = this.props
    let {name, description, id} = ingredient
    return (
        <IngredientTableRow
          position = {position}
          id = {id}
          name = {name}
          description = {description}
        />
    );
  }
}

IngredientTableRowHOC.propTypes = {
  position : PropTypes.number.isRequired,
}

export default IngredientTableRowHOC;
