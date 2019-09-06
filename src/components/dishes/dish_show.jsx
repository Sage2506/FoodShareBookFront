import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ListGroup, Image } from "react-bootstrap";
//import { dishes } from "../mock_dishes";

import {default as DishIngredientListItem} from '../../containers/dish_ingredient/dish_ingredient_list_item_container';
export class DishShow extends Component {
  render() {
    const {
      dish_id,
      dish_name, 
      dish_description, 
      dish_recipe, 
      dish_image, 
      dish_ingredients, 
    } = this.props
    return (
      <div>
        <h1>{dish_name}</h1>
        <Image src={dish_image === ""? "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" :dish_image } alt="Imagen no encontrada" thumbnail/>
        <h2>{dish_description}</h2>
        <h2>{dish_recipe}</h2>
        <ListGroup>
          {dish_ingredients.map( (dish_ingredient, index) => <DishIngredientListItem dish_ingredient={dish_ingredient} key={dish_id+"_"+index} />)}
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
  dish_image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
  dish_description : "Descripcion del platillo",
  dish_recipe : "Receta del platillo",
  dish_id : 2.0,
  dish_ingredients : []
}

export default DishShow;
