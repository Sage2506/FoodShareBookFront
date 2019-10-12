import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ListGroup, Image } from "react-bootstrap";
//import { dishes } from "../mock_dishes";

import {default as DishIngredientListItem} from '../../containers/dish_ingredient/dish_ingredient_list_item_container';
export class DishShow extends Component {
  render() {
    const {
      id,
      name, 
      description, 
      recipe, 
      image, 
      ingredients, 
    } = this.props
    return (
      <div>
        <h1>{name}</h1>
        <Image src={image === ""? "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" :image } alt="Imagen no encontrada" thumbnail/>
        <h2>{description}</h2>
        <h2>{recipe}</h2>
        <ListGroup>
          {ingredients.map( (dish_ingredient, index) => <DishIngredientListItem dish_ingredient={dish_ingredient} key={id+"_"+index} />)}
        </ListGroup>
      </div>
    );
  }
}

DishShow.propTypes = {
  name : PropTypes.string,
  dish_image : PropTypes.string,
  description : PropTypes.string,
  recipe : PropTypes.string,
  id : PropTypes.number,
}

DishShow.defaultProps = {
  name : "Nombre de platillo",
  dish_image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
  description : "Descripcion del platillo",
  recipe : "Receta del platillo",
  id : 2.0,
  ingredients : []
}

export default DishShow;
