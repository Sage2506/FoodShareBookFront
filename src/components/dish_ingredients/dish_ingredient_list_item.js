import React, { Component } from 'react';
import PropTypes from 'prop-types'; 

export class DishIngredientListItem extends Component {
  render() {
    return (
      <li>
        <p>{this.props.ingredient_name}</p>
        <p>{this.props.ingredient_description}</p>
        <p>{this.props.measure_name}</p>
        <p>{this.props.quantity}</p>
      </li>
    );
  }
}

DishIngredientListItem.propTypes = {
  ingredient_name : PropTypes.string,
  ingredient_description : PropTypes.string,
  ingredient_image : PropTypes.string,
  //optional PropTypes.string.isRequired to make id not optional
  ingredient_id : PropTypes.number,
  measure_name : PropTypes.string,
  quantity : PropTypes.number,
}

DishIngredientListItem.defaultProps = {
  ingredient_name : "Nombre del Ingrediente",
  ingredient_description : "Descripcion del ingrediente",
  ingredient_image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
  //optional PropTypes.string.isRequired to make id not optional
  ingredient_id : 9,
  measure_name : "Nombre de medida",
  quantity : 10.0,
}

export default DishIngredientListItem;
