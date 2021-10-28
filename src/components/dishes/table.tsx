import React, { Component } from 'react';
import { Table, Modal, Button} from "react-bootstrap";
import { IDish } from '../../interfaces/dishes';
import { default as DishTableRow } from './table_row_hoc';

interface IProps {
  dishes :IDish[],
  per_page: string,
  deleteDish: Function,
  permissions : {
    create?  : boolean,
    delete? : boolean,
    edit? : boolean
  }
}

interface IState {
  deleteShow: boolean,
  id: number
}

export class DishTable extends Component<IProps, IState> {
  constructor(props : any) {
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

  handleOpen = (id: number) => {
    this.setState({
      deleteShow: true,
      id,
    })
  }

  deleteDish = (id: number) => {
    this.props.deleteDish(id);
    this.handleClose();
  }

  render() {
    let { dishes , per_page, permissions} = this.props;
    let { deleteShow, id } = this.state;
    per_page = per_page === undefined ? '10': per_page
    var empty_rows = []
    for(let i = 0; i < parseInt(per_page) - dishes.length; i++){
      empty_rows.push(i);
    }

    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>Platillo</th>
              <th>Descripcion</th>
              <th>Numero de ingredientes</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
          { dishes.map( (dish, position) =>
          <DishTableRow dish = {dish} position = {position} key = {dish.id} handleOpen={this.handleOpen} permissions={permissions}/>
            )}
          { empty_rows.map( (row, position) =>
            <tr key = {position}>
              <td colSpan={5} > - </td>
            </tr>
            ) }
          </tbody>
        </Table>
        <Modal show={deleteShow} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Ingredient</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete dish with Id: {id} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => this.deleteDish(id)}>
              Acept
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default DishTable;
