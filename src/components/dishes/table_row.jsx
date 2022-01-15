import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';


export class DishTableRow extends Component {
  render() {
    let { name, description, id, ingredients, handleOpen, permissions } = this.props
    return (

      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>{ingredients.length}</td>
        <td>
          <ButtonToolbar>
            <LinkContainer to={'/dishes/' + id}>
              <Button variant="primary" title="Detalles"><i className="fas fa-info-circle"></i></Button>
            </LinkContainer>
            {permissions.edit &&
              <LinkContainer to={'/dishes/edit/' + id}>
                <Button variant="info" title="Editar"><i className="far fa-edit"></i></Button>
              </LinkContainer>
            }
            {permissions.delete && <Button variant="danger" title="Borrar" onClick={() => handleOpen(id)}><i className="far fa-trash-alt"></i></Button>}
          </ButtonToolbar>
        </td>
      </tr>
    );
  }
}

export default DishTableRow;
