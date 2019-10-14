import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { Button , ButtonToolbar } from 'react-bootstrap';

export class DishTableRow extends Component {
  render() {  
    let { name, description, id, ingredients } = this.props
    return (
      
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{description}</td>
          <td>{ingredients.length}</td>
          <td>
            <ButtonToolbar>
              <LinkContainer to={'/dishes/'+id}>
                <Button variant="primary" title="Detalles"><i className="fas fa-info-circle"></i></Button>
              </LinkContainer>
              <Button variant="info" title="Editar"><i className="far fa-edit"></i></Button>
              <Button variant="danger" title="Borrar"><i className="far fa-trash-alt"></i></Button>
            </ButtonToolbar>
          </td>
        </tr>
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
  name : "Nombre de platillo",
  image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
  description : "Descripcion del platillo",
  recipe : "Receta del platillo",
  ingredients : [],
  id : 2.0,
}

export default DishTableRow;
