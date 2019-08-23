import React, { Component } from 'react';
import { default as DishListItem } from "./dish_list_item_hoc";
import { dishes } from "../mock_dishes";
// TODO: pull data from api (axios)
// TODO: add redux
class DishesIndex extends Component {
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
        <header>
          <h1>I'm in the header</h1>
          <h2>Me too</h2>
        </header>
        <ul>
        {this.state.dishes.map( dish => 
        <DishListItem dish = {dish} key = {dish.id}/>
          )}
        </ul>
          <button onClick={this.testLog}>Algun botón</button>
      <footer>
        <h1>And I am the footer</h1>
      </footer>
      </div>
    );
  }
}

export default DishesIndex;