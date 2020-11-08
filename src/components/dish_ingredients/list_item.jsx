import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { ListGroup, Image } from "react-bootstrap";

export class DishIngredientListItem extends Component {
  render() {
    
    let {
      ingredient_name,
      measures,
      quantity,
      ingredient_image,
      measure_id,
    } = this.props

    return (
      <ListGroup.Item>
        <p>{ingredient_name}</p>
        <p>{measures.length > 0 ? measures.find( measure => measure.id === measure_id).name : measure_id}</p>
        <p>{quantity}</p>
        <Image src={ingredient_image} alt="No image found" fluid></Image>
      </ListGroup.Item>
    );
  }
}

DishIngredientListItem.propTypes = {
  ingredient_name : PropTypes.string,
  ingredient_image : PropTypes.string,
  //optional PropTypes.string.isRequired to make id not optional
  ingredient_id : PropTypes.number,
  measure_id : PropTypes.number,
  quantity : PropTypes.number,
}

DishIngredientListItem.defaultProps = {
  ingredient_name : "Nombre del Ingrediente",
  ingredient_image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
  //optional PropTypes.string.isRequired to make id not optional
  ingredient_id : 9,
  measure_id : -1,
  quantity : 10.0,
}

export default DishIngredientListItem;
