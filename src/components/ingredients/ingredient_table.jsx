import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { default as IngredientTableRow } from './ingredient_table_row_hoc';

export class IngredientTable extends Component {
  render() {
    let { ingredients, per_page } = this.props;
    var empty_rows = []
    for(let i = 0; i < parseInt(per_page) - ingredients.length; i++){
      empty_rows.push(i);
    }
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
        { empty_rows.map( (row, position) =>
          <tr key = {position}>
            <td colSpan={4} > - </td>
          </tr>
          ) }
        </tbody>
      </Table>
    );
  }
}

export default IngredientTable;
