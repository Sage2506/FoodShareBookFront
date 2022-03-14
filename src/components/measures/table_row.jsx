import React, { Component } from 'react'
import { LinkContainer } from "react-router-bootstrap";
import { ButtonToolbar, Button } from 'react-bootstrap';
export default class MeasuresTableRow extends Component {
  render() {
    const { id, name, group } = this.props.measure
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{group}</td>
        <td>
          <ButtonToolbar>
            <LinkContainer to={`/measures/${id}`}><Button variant="primary" title="Detalles"><i className='fas fa-info-circle'></i></Button></LinkContainer>
          </ButtonToolbar>
        </td>
      </tr>
    )
  }
}
