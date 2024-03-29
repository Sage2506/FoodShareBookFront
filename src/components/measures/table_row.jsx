import React, { Component } from 'react'
import { LinkContainer } from "react-router-bootstrap";
import { ButtonToolbar, Button } from 'react-bootstrap';
export default class MeasuresTableRow extends Component {
  render() {
    const { currentUserRoleId, measure, handleOpen } = this.props
    const { id, name, group, equivalent } = measure
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{group}</td>
        <td>{equivalent}</td>
        <td>
          <ButtonToolbar>
            <LinkContainer to={`/measures/${id}`}><Button variant="primary" title="Detalles"><i className='fas fa-info-circle'></i></Button></LinkContainer>
            {currentUserRoleId === 1 &&
              <LinkContainer to={'/measures/edit/' + id}><Button variant="info" title="Editar"><i className="far fa-edit"></i></Button></LinkContainer>
            }
            {currentUserRoleId === 1 &&
              <Button variant="danger" title="Borrar" onClick={() => handleOpen(id)}><i className="far fa-trash-alt"></i></Button>
            }
          </ButtonToolbar>
        </td>
      </tr>
    )
  }
}
