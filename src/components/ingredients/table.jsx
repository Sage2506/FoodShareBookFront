import React, { Component } from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import { deleteIngredient } from '../../services/ingredient_requests';
import { default as IngredientTableRow } from './table_row_hoc';

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
    deleteIngredient(id).then( response =>{
      if(response.code === 200){
        this.handleClose();
        this.props.getIngredients();
      }
    })
  }

  render() {
    let { ingredients, per_page, permissions, currentUserId, currentUserRoleId } = this.props;
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
          <IngredientTableRow ingredient = {ingredient} key = {ingredient.id} handleOpen={this.handleOpen} permissions ={permissions} currentUserId = {currentUserId} currentUserRoleId = {currentUserRoleId}/>
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
