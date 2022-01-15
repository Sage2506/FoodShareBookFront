import React, { Component } from 'react';
import { connect } from "react-redux";
import { get_dishes, delete_dish } from "../../services/dish_requests";
import { clearError } from '../../actions/error';
import { default as Pagination } from '../common/pagination';
import { mapPermissions } from '../lib/common'
import { Modal, Button } from 'react-bootstrap';
import { DishTable } from './table';
import { FloatingActionButtonPlus } from '../common/floating_action_button';
import IUser from '../../interfaces/users';
import { getCurrentUserPermissionByType } from '../../services/permissions_type_requests';
import { IPagination } from '../../interfaces/common';

export class DishesIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      permissions : {
        create : false,
        delete : false,
        edit : false
      }
    }
  }

  componentDidMount() {
    let { getDishes, pagination, getCurrentUserPermissionsByType, current_user  } = this.props;
    getDishes(pagination.currentPage);
    getCurrentUserPermissionsByType();
    if(current_user.permissions !== undefined && current_user.permissions.length > 0) this.updateStatePermissions()
  }

  componentDidUpdate(prevProps , prevState , snapshot){
    if(this.props.current_user.permissions &&  this.props.current_user.permissions.length > 0 ){
      if(prevProps.current_user.permissions === undefined){
        this.updateStatePermissions()
      } else if( prevProps.current_user.permissions.length < 1){
        this.updateStatePermissions()
      } else if( this.props.current_user.permissions[0].id !== prevProps.current_user.permissions[0].id){
        this.updateStatePermissions()
      }
    }
  }

  updateStatePermissions = () =>{
    this.setState({permissions : mapPermissions(this.props.current_user.permissions)})
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    let { pagination , getDishes, dishes, current_user } = this.props;
    let {show, permissions } = this.state;
    let newPermissions = {}

    return (
      <div>
      <DishTable
        dishes = {dishes}
        per_page = {pagination.pageSize}
        deleteDish = {this.props.deleteDish}
        permissions = {permissions }
        currentUserId = {current_user.id}
        currentUserRoleId = { current_user.role_id}
      />
      <Pagination
        pagination={pagination}
        paginationRequest={getDishes}
      />
      {permissions.create &&
        <FloatingActionButtonPlus
          link = '/dishes/new'
        />
      }
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

const mapStateToProps = (store ) => {
  return{
      dishes: store.dishReducer.dishes,
      pagination: store.dishReducer.pagination,
      current_user: store.userReducer.current_user
  }
}

const mapDispatchToProps = (dispatch ) => {
  return {
      getDishes: (page = 1, per_page = 10) => {
          dispatch(get_dishes(page, per_page))
      },
      clearError: () => {
          dispatch(clearError())
      },
      deleteDish: (id ) =>{
          dispatch(delete_dish(id))
      },
      getCurrentUserPermissionsByType: () => {
        dispatch(getCurrentUserPermissionByType(1))
      }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishesIndex)