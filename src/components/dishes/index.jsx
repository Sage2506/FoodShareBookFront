import React, { Component } from 'react';
import { default as DishTableRow } from "./dish_table_row_hoc";
import {  Table} from "react-bootstrap";

export class DishesIndex extends Component {

  componentDidMount() {
      this.props.getDishes();
  }
  
  render() {        
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
        { this.props.dishes.map( (dish, position) => 
        <DishTableRow dish = {dish} position = {position} key = {dish.id}/>
          )}
        </tbody>
      </Table>
    );
  }
}

export default DishesIndex;