import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { ButtonToolbar, Button } from 'react-bootstrap';
export class IngredientTableRow extends Component {
  render() {  
    let {id, name, description, handleOpen} = this.props
    return (
      
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{description}</td>
          <td>
            <ButtonToolbar>
              <LinkContainer to={'/ingredients/'+id}><Button variant="primary" title="Detalles"><i className="fas fa-info-circle"></i></Button></LinkContainer>
              <LinkContainer to={'/ingredients/edit/'+id}><Button variant="info" title="Editar"><i className="far fa-edit"></i></Button></LinkContainer>
              <Button variant="danger" title="Borrar" onClick={ () => handleOpen(id) } ><i className="far fa-trash-alt"></i></Button>
            </ButtonToolbar>
          </td>
        </tr>
      
    );
  }
}

export default IngredientTableRow;