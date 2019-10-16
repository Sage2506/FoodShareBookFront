import React, { Component } from 'react';
import { connect } from "react-redux";
import { get_dishes, delete_dish } from "../../services/dish_requests";
import { clearError } from '../../actions/error';
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
        deleteDish = {this.props.deleteDish}
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

const mapStateToProps = (store) => {
  return{
      dishes: store.dishReducer.dishes,
      pagination: store.dishReducer.pagination,
  }
}

const mapDispatchToProps = dispatch => {
  return {
      getDishes: (page = 1, per_page = 10) => {
          dispatch(get_dishes(page, per_page))
      },
      clearError: () => {
          dispatch(clearError())
      },
      deleteDish: (id) =>{
          dispatch(delete_dish(id))
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishesIndex)