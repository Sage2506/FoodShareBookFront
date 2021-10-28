import React, { Component } from 'react';
import { DishTableRow } from "./table_row";
import { IDish } from '../../interfaces/dishes';
interface IProps {
  dish : IDish,
  position: number,
  handleOpen: Function,
  permissions : {
    create?  : boolean,
    delete? : boolean,
    edit? : boolean
  }
}
export class DishTabeRowHOC extends Component<IProps> {
  render() {
    let { position , dish, handleOpen, permissions } = this.props;
    let { name, image, description, recipe, id, dish_ingredients } = dish
    return (
        <DishTableRow
          position = { position }
          name = { name }
          image = { image }
          description = { description }
          recipe = { recipe }
          id = { id }
          ingredients = { dish_ingredients }
          handleOpen = {handleOpen}
          permissions={permissions}
        />
    );
  }
}


export default DishTabeRowHOC;
