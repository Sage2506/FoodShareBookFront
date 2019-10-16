import React, { Component } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import { default as IngredientTableRow } from './ingredient_table_row_hoc';

export class IngredientTable extends Component {
  constructor(props) {
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

  handleOpen = (id) => {
    this.setState({
      deleteShow: true,
      id,
    })
  }
  
  deleteIngredient = (id) => {
    this.props.deleteIngredient(id);
    this.handleClose();
  }

  render() {
    let { ingredients, per_page } = this.props;
    let { deleteShow, id } = this.state;
    var empty_rows = []
    for(let i = 0; i < parseInt(per_page) - ingredients.length; i++){
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
        { ingredients.map( (ingredient, position) => 
        <IngredientTableRow ingredient = {ingredient} position = {position} key = {ingredient.id} handleOpen={this.handleOpen}/>
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
