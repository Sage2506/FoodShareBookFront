import React, { Component } from 'react';
import { DishTableRow } from "./table_row";

export class DishTabeRowHOC extends Component {
  render() {
    let { position , dish, handleOpen, permissions, currentUserId, currentUserRoleId } = this.props;
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
          currentUserId={currentUserId}
          currentUserRoleId={currentUserRoleId}
        />
    );
  }
}


export default DishTabeRowHOC;
