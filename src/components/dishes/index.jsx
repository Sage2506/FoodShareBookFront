import React, { Component } from 'react';
import { default as Pagination } from '../common/pagination';
import { Modal, Button } from 'react-bootstrap';
import { DishTable } from './dish_table';
import { FloatingActionButtonPlus } from '../common/floating_action_button';


export class DishesIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false
    }
  }
  componentDidMount() {
    let { getDishes, pagination  } = this.props;
    getDishes(pagination.currentPage);
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    let { pagination , getDishes, dishes } = this.props;
    let {show} = this.props;

    return (
      <div>
      <DishTable
        dishes = {dishes}
        per_page = {pagination.pageSize}
      />
      <Pagination
        pagination={pagination}
        paginationRequest={getDishes}
      />
      <FloatingActionButtonPlus
        link = '/dishes/new'
      />
       <Modal show={show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

export default DishesIndex;