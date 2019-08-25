import React, { Component } from 'react';
import { default as DishListItem } from "./dish_list_item_hoc";
import { ListGroup } from "react-bootstrap";

// TODO: pull data from api (axios)
// TODO: add redux

export class DishesIndex extends Component {

  componentDidMount() {
      this.props.getDishes();
  }
  
  render() {        
    return (
      <div>
        <ListGroup>
        { this.props.dishes.map( (dish, position) => 
        <DishListItem dish = {dish} position = {position} key = {dish.id}/>
          )}
        </ListGroup>
      </div>
    );
  }
}

export default DishesIndex;