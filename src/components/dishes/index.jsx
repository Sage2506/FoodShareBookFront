import React, { Component } from 'react';
import { default as DishListItem } from "./dish_list_item_hoc";
import { dishes } from "../mock_dishes";
import { ListGroup } from "react-bootstrap";
// TODO: pull data from api (axios)
// TODO: add redux
export class DishesIndex extends Component {
  constructor(){
    super();
    this.state = {
      dishes : dishes
    }
  }

  testLog = () => {
    console.log("prueba de boton");
    
  }
  render() {
    return (
      <div>
        
        <ListGroup>
        {this.state.dishes.map( (dish, position) => 
        <DishListItem dish = {dish} position = {position} key = {dish.id}/>
          )}
        </ListGroup>
      </div>
    );
  }
}

export default DishesIndex;