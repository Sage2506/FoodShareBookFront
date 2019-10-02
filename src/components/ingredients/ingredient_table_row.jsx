import React, { Component } from 'react';
import { LinkContainer } from "react-router-bootstrap";

export class IngredientTableRow extends Component {
  render() {  
    let {id, name, description} = this.props
    return (
      <LinkContainer to={'/ingredients/'+id}>
        <tr>
          <td>{id}</td>
          <td>{name}</td>
          <td>{description}</td>
          <td>Aqui van a ir las acciones</td>
        </tr>
      </LinkContainer>
    );
  }
}

export default IngredientTableRow;