import React, {Component} from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { ButtonToolbar, Button } from 'react-bootstrap';

export class PermissionsTableRow extends Component {
  render() {
    const { permission } = this.props
    const { id, name, description } = permission
    return(
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
        <td>
          <ButtonToolbar>
            <LinkContainer to={'/permissions/'+id}><Button variant="primary" title="Detalles"><i className="fas fa-info-circle"></i></Button></LinkContainer>
            <LinkContainer to={'/permissions/edit/'+id}><Button variant="info" title="Editar"><i className="far fa-edit"></i></Button></LinkContainer>
            <Button variant="danger" title="Borrar" onClick={ () => handleOpen(id) } ><i className="far fa-trash-alt"></i></Button>
          </ButtonToolbar>
        </td>
      </tr>
    );
  }
}

export default PermissionsTableRow;