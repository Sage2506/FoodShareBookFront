import React, { Component } from 'react';
import { IngredientTableRow } from "./table_row";
import { IIngredients } from '../../interfaces/ingredients';
export class IngredientTableRowHOC extends Component {
  render() {
    let { ingredient, handleOpen} = this.props
    let {name, description, id} = ingredient
    return (
        <IngredientTableRow
          id = {id}
          name = {name}
          description = {description}
          handleOpen = {handleOpen}
        />
    );
  }
}


export default IngredientTableRowHOC;
