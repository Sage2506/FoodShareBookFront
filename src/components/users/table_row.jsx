import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { ButtonToolbar, Button } from 'react-bootstrap';

export class UserTableRow extends Component {
  render() {
    const {user} = this.props
    const {id, email} = user
    return (
      <tr>
        <td>{id}</td>
        <td>{email}</td>
        <td>
          <ButtonToolbar>
            <LinkContainer to={'/users/'+id}>
              <Button variant="primary" title="Detalles">
                <i className="fas fa-info-circle"></i>
              </Button>
            </LinkContainer>
            <LinkContainer to={'/users/edit/'+id}>
              <Button variant="info" title="Editar">
                <i className="far fa-edit"></i>
              </Button>
            </LinkContainer>
          </ButtonToolbar>
        </td>
      </tr>
    );
  }
}

export default UserTableRow;
