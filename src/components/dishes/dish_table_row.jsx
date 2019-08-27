import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { LinkContainer } from "react-router-bootstrap";

export class DishTableRow extends Component {
  render() {  
      return (
          <LinkContainer to={'/dishes/'+this.props.dish_id}>
              <tr>
        <td>{this.props.dish_id}</td>
        <td>{this.props.dish_name}</td>
        <td>{this.props.dish_description}</td>
        <td>{this.props.dish_ingredients.length}</td>
        <td>Aqui van a ir las acciones</td>
        </tr>
        </LinkContainer>
    );
  }
}

DishTableRow.propTypes = {
  position : PropTypes.number.isRequired,
  dish_name : PropTypes.string,
  dish_image : PropTypes.string,
  dish_description : PropTypes.string,
  dish_recipe : PropTypes.string,
  dish_id : PropTypes.number.isRequired,
}

DishTableRow.defaultProps = {
  dish_name : "Nombre de platillo",
  dish_image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
  dish_description : "Descripcion del platillo",
  dish_recipe : "Receta del platillo",
  dish_id : 2.0,
}

export default DishTableRow;
