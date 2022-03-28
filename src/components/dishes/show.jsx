import React, { Component } from 'react';
import { ListGroup, Image } from "react-bootstrap";

import DishIngredientListItemHoc from '../dish_ingredients/list_item_hoc';
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
          {!!ingredients && ingredients.map( (dish_ingredient, index) => <DishIngredientListItemHoc dish_ingredient={dish_ingredient} key={id+"_"+index} />)}
        </ListGroup>
      </div>
    );
  }
}


export default DishShow;
