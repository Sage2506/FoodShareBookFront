import React, {Component} from 'react';
import { Table, Modal, Button } from 'react-bootstrap';
import PermissionsTableRowHOC from './table_row_hoc';

export class PermissionsTable extends Component {

  componentDidMount() {
    const { permissions, deleteShow, deleteId } = this.props
  }

  render() {
    const { permissions, deleteShow, deleteId, handleClose, deletePermission, handleOpen } = this.props
    return(
      <div>
      <Table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { permissions.map( (permission, position ) =>
            <PermissionsTableRowHOC permission = { permission } key={permission.id} handleOpen = { handleOpen }></PermissionsTableRowHOC>
          )}
        </tbody>
      </Table>
      <Modal show={deleteShow} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Permission</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete permission with Id: {deleteId} </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => deletePermission(deleteId)}>
            Acept
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default PermissionsTable;