import React, { Component } from 'react';
import { default as DishListItem } from "./dish_list_item_hoc";
// TODO: pull data from api (axios)
// TODO: add redux
class DishesIndex extends Component {
  render() {
    return (
      <div>
        <ul>
        
        <DishListItem>
        </DishListItem>
        <DishListItem>
        </DishListItem>
        <DishListItem>
        </DishListItem>
        </ul>
      </div>
    );
  }
}

export default DishesIndex;