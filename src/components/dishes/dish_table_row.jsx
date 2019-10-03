import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Button , ButtonToolbar } from 'react-bootstrap';

export class DishTableRow extends Component {
  render() {  
    let { name, description, id, ingredients } = this.props
    return (
      <LinkContainer to={'/dishes/'+id}>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{description}</td>
          <td>{ingredients.length}</td>
          <td>
            <ButtonToolbar>
              <Button variant="primary" title="Detalles"><i className="fas fa-info-circle"></i></Button>
              <Button variant="info" title="Editar"><i className="far fa-edit"></i></Button>
              <Button variant="danger" title="Borrar"><i className="far fa-trash-alt"></i></Button>
            </ButtonToolbar>
          </td>
        </tr>
      </LinkContainer>
    );
  }
}

DishTableRow.propTypes = {
  position : PropTypes.number.isRequired,
  name : PropTypes.string,
  image : PropTypes.string,
  description : PropTypes.string,
  recipe : PropTypes.string,
  id : PropTypes.number.isRequired,
}

DishTableRow.defaultProps = {
  dish_name : "Nombre de platillo",
  dish_image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
  dish_description : "Descripcion del platillo",
  dish_recipe : "Receta del platillo",
  dish_id : 2.0,
}

export default DishTableRow;
