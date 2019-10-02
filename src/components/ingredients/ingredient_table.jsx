import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { default as IngredientTableRow } from './ingredient_table_row_hoc';

export class IngredientTable extends Component {
  render() {
    let { ingredients } = this.props;
    return (
      <Table>
         <thead>
          <tr>
            <th>id</th>
            <th>Ingrediente</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        { ingredients.map( (ingredient, position) => 
        <IngredientTableRow ingredient = {ingredient} position = {position} key = {ingredient.id}/>
          )}
        </tbody>
      </Table>
    );
  }
}

export default IngredientTable;
