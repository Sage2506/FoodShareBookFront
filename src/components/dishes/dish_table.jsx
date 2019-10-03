import React, { Component } from 'react';
import { Table } from "react-bootstrap";
import { default as DishTableRow } from './dish_table_row_hoc';
export class DishTable extends Component {
  render() {
    let { dishes , per_page} = this.props;
    per_page = per_page === undefined ? 10: parseInt(per_page)
    var empty_rows = []
    for(let i = 0; i < parseInt(per_page) - dishes.length; i++){
      empty_rows.push(i);
    }
    
    return (
      <Table>
         <thead>
          <tr>
            <th>id</th>
            <th>Platillo</th>
            <th>Descripcion</th>
            <th>Numero de ingredientes</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        { dishes.map( (dish, position) => 
        <DishTableRow dish = {dish} position = {position} key = {dish.id}/>
          )}
        { empty_rows.map( (row, position) =>
          <tr key = {position}>
            <td colSpan={5} > - </td>
          </tr>
          ) }
        </tbody>
      </Table>
    );
  }
}

export default DishTable;
