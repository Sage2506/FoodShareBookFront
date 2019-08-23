import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { ListGroup } from "react-bootstrap";

export class DishIngredientListItem extends Component {
  render() {
    return (
      <ListGroup.Item>
        <p>{this.props.ingredient_name}</p>
        <p>{this.props.measure_id}</p>
        <p>{this.props.quantity}</p>
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
