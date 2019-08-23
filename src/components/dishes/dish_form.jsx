import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export class DishForm extends Component {
  
  render() {
    return (
      <div>
        <h1>{this.props.dish_image}</h1>
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
