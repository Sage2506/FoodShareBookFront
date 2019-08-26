import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ListGroup, Image } from "react-bootstrap";
//import { dishes } from "../mock_dishes";

import {default as DishIngredientListItem} from '../dish_ingredients/dish_ingredient_list_item_hoc';
export class DishShow extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.dish_name}</h1>
        <Image src={this.props.dish_image} alt="Imagen no encontrada" thumbnail/>
        <h2>{this.props.dish_description}</h2>
        <h2>{this.props.dish_recipe}</h2>
        <ListGroup>
          {this.props.dish_ingredients.map( dish_ingredient => <DishIngredientListItem dish_ingredient={dish_ingredient} key={this.props.dish_id+`_`+dish_ingredient.ingredient_id} />)}
        </ListGroup>
      </div>
    );
  }
}

DishShow.propTypes = {
  dish_name : PropTypes.string,
  dish_image : PropTypes.string,
  dish_description : PropTypes.string,
  dish_recipe : PropTypes.string,
  dish_id : PropTypes.number,
}

DishShow.defaultProps = {
  dish_name : "Nombre de platillo",
  dish_image : "",
  dish_description : "Descripcion del platillo",
  dish_recipe : "Receta del platillo",
  dish_id : 2.0,
  dish_ingredients : []
}

export default DishShow;
