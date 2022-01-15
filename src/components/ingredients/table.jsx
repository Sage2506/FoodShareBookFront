import React, { Component } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import { IIngredients } from '../../interfaces/ingredients';
import { default as IngredientTableRow } from './table_row_hoc';

interface IProps {
  ingredients : IIngredients[],
  deleteIngredient: Function,
  per_page : number
}

interface IState {
  deleteShow: boolean,
  id: number
}

export class IngredientTable extends Component<IProps,IState> {
  constructor(props:any) {
    super(props);
    this.state = {
      deleteShow: false,
      id: -1
    }
  }

  handleClose = () => {
    this.setState({
      deleteShow: false,
      id: -1
    })
  }

  handleOpen = (id : number) => {
    this.setState({
      deleteShow: true,
      id,
    })
  }

  deleteIngredient = (id : number) => {
    this.props.deleteIngredient(id);
    this.handleClose();
  }

  render() {
    let { ingredients, per_page } = this.props;
    let { deleteShow, id } = this.state;
    var empty_rows = []
    for(let i = 0; i < per_page - ingredients.length; i++){
      empty_rows.push(i);
    }
    return (
      <div>
      <Table>
         <thead>
          <tr>
            <th>id</th>
            <th>Ingrediente</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        { ingredients.map( (ingredient) =>
        <IngredientTableRow ingredient = {ingredient} key = {ingredient.id} handleOpen={this.handleOpen}/>
          )}
        { empty_rows.map( (row, position) =>
          <tr key = {position}>
            <td colSpan={4} > - </td>
          </tr>
          ) }
        </tbody>
      </Table>
        <Modal show={deleteShow} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingredient</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete ingredient with Id: {id} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => this.deleteIngredient(id)}>
            Acept
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }
}

export default IngredientTable;
