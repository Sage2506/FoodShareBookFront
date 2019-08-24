import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { dishes } from "../mock_dishes";
import {default as DishIngredientListItem} from '../dish_ingredients/dish_ingredient_list_item_hoc';
export class DishForm extends Component {
  
  render() {
    return (
      <div>
        <h1>{dishes[this.props.match.params.id].name}</h1>
        <img src={dishes[this.props.match.params.id].image} alt=""/>
        <h2>{dishes[this.props.match.params.id].description}</h2>
        <h2>{dishes[this.props.match.params.id].recipe}</h2>
        <ul>
          {dishes[this.props.match.params.id].dish_ingredients.map( dish_ingredient => <DishIngredientListItem dish_ingredient={dish_ingredient}/>)}
        </ul>
      </div>
    );
  }
}

DishForm.propTypes = {
  dish_name : PropTypes.string,
  dish_image : PropTypes.string,
  dish_description : PropTypes.string,
  dish_recipe : PropTypes.string,
  dish_id : PropTypes.number,
}

DishForm.defaultProps = {
  dish_name : "Nombre de platillo",
  dish_image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
  dish_description : "Descripcion del platillo",
  dish_recipe : "Receta del platillo",
  dish_id : 2.0,
}

export default DishForm;
