import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'react-bootstrap';
import { getMeasures } from '../../services/measure_request';
import { default as Pagination } from '../common/pagination';
import MeasuresTable from './table';
import FloatingActionButtonPlus from '../common/floating_action_button';
export class MeasuresTableHOC extends Component {
  componentDidMount() {
    this.props.getMeasures()
  }

  render() {
    const { measures, pagination, getMeasures, permissions, handleClose, deleteMeasure, deleteShow, id, handleOpen } = this.props
    return (
      <div>
        <MeasuresTable
          measures={measures}
          permissions={permissions}
          handleOpen={handleOpen}
        />
        <Pagination pagination={pagination} paginationRequest={getMeasures} />
        {permissions.create &&
          <FloatingActionButtonPlus
            link='/measures/new'
          />
        }
        <Modal show={deleteShow} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Measure</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete measure with Id: {id} </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => deleteMeasure(id)}>
              Acept
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  measures: store.measureReducer.measures,
  pagination: store.measureReducer.pagination
})

const mapDispatchToProps = dispatch => {
  return {
    getMeasures: params => {
      dispatch(getMeasures(params))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasuresTableHOC)