import React, { Component } from 'react';
import { default as DishListItem } from "./dish_list_item_hoc";
import { dishes } from "../mock_dishes";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
        <LinkContainer to="/1">
          <p>
          Test Component 1</p>
          </LinkContainer>
        <LinkContainer to="/2"><p>
          Test Component 2</p></LinkContainer>
        <ListGroup>
        {this.state.dishes.map( dish => 
        <DishListItem dish = {dish} key = {dish.id}/>
          )}
        </ListGroup>
      </div>
    );
  }
}

export default DishesIndex;