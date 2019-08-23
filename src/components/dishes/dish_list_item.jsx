import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {default as DishIngredientListItem} from '../dish_ingredients/dish_ingredient_list_item_hoc'

export class DishListItem extends Component {
  render() {
    return (
      <li>
        <p>id {this.props.dish_id}</p>
        <img src={this.props.dish_image} alt="La imagen del platillo"/>
        <h3>{this.props.dish_name}</h3>
        <h4>{this.props.dish_description}</h4>
        <h4>{this.props.dish_recipe}</h4>
        <ul>
          {this.props.dish_ingredients.map( dish_ingredient => <DishIngredientListItem dish_ingredient = {dish_ingredient} key = {this.props.dish_id.toString()+' '+dish_ingredient.measure_id.toString()}></DishIngredientListItem>)}
        
        </ul>
      </li>
    );
  }
}

DishListItem.propTypes = {
  dish_name : PropTypes.string,
  dish_image : PropTypes.string,
  dish_description : PropTypes.string,
  dish_recipe : PropTypes.string,
  dish_id : PropTypes.number,
}

DishListItem.defaultProps = {
  dish_name : "Nombre de platillo",
  dish_image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
  dish_description : "Descripcion del platillo",
  dish_recipe : "Receta del platillo",
  dish_id : 2.0,
}

export default DishListItem;
