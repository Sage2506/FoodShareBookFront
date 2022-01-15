import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';

export class RoleTableRow extends Component {
  render() {
    const { role } = this.props
    const { id, name } = role
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>
          <LinkContainer to={'/roles/'+id}>
            <Button variant ="info" title="Editar">
              <i className="fas fa-info-circle"></i>
            </Button>
          </LinkContainer>
        </td>
      </tr>
    );
  }
}

export default RoleTableRow;
