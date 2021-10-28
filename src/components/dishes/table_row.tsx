import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button , ButtonToolbar } from 'react-bootstrap';
import { DishIngredient, IDish } from '../../interfaces/dishes';

interface IProps {
  description : string,
  handleOpen: Function,
  id: number,
  image : string,
  ingredients : DishIngredient[],
  name : string,
  permissions : {
    create?  : boolean,
    delete? : boolean,
    edit? : boolean
  },
  position: number,
  recipe: string
}

export class DishTableRow extends Component<IProps> {
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
              <LinkContainer to={'/dishes/'+id}>
                <Button variant="primary" title="Detalles"><i className="fas fa-info-circle"></i></Button>
              </LinkContainer>
              {permissions.edit && <Button variant="info" title="Editar"><i className="far fa-edit"></i></Button> }
              {permissions.delete && <Button variant="danger" title="Borrar" onClick={() => handleOpen(id)}><i className="far fa-trash-alt"></i></Button>}
            </ButtonToolbar>
          </td>
        </tr>
    );
  }
}

export default DishTableRow;
