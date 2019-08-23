import React, { Component } from 'react';
import { default as DishListItem } from "./dish_list_item_hoc";
import { dishes } from "../mock_dishes";
import { Link } from "react-router-dom";
// TODO: pull data from api (axios)
// TODO: add redux
// TODO: view react bootstrap usage
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
        <Link to="/1">Test Component 1</Link>
        <Link to="/2">Test Component 2</Link>
        {this.state.dishes.map( dish => 
        <DishListItem dish = {dish} key = {dish.id}/>
          )}
      </div>
    );
  }
}

export default DishesIndex;