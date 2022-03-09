import React, { Component } from 'react';
import { IngredientTableRow } from "./table_row";
import { IIngredients } from '../../interfaces/ingredients';
export class IngredientTableRowHOC extends Component {
  render() {
    let { ingredient, handleOpen, permissions, currentUserId, currentUserRoleId} = this.props
    let {name, description, id, user_id} = ingredient
    return (
        <IngredientTableRow
          id = {id}
          user_id = {user_id}
          name = {name}
          description = {description}
          handleOpen = {handleOpen}
          permissions ={permissions}
          currentUserId = {currentUserId}
          currentUserRoleId = {currentUserRoleId}
        />
    );
  }
}


export default IngredientTableRowHOC;
