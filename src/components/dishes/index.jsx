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
import { updatePermissions } from '../../lib/common';

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
    let { getDishes, pagination, getCurrentUserPermissionsByType, currentUser  } = this.props;
    getDishes(pagination.currentPage);
    getCurrentUserPermissionsByType();
  }

  componentDidUpdate(prevProps , prevState , snapshot){
    const { permissions: prevPermissions} = prevProps.currentUser
    const {permissions : newPermissions} = this.props.currentUser
    //update when they have different sizes
    //update when both have something and first's id's are diff
    if ( prevPermissions.length !== newPermissions.length || (prevPermissions.length !== 0 && prevPermissions[0].id !== newPermissions[0].id) ){
      console.log("actualizando permisos")
      updatePermissions(this)
    }
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    let { pagination , getDishes, dishes, currentUser } = this.props;
    let {show, permissions } = this.state;
    let newPermissions = {}

    return (
      <div>
      <DishTable
        dishes = {dishes}
        per_page = {pagination.pageSize}
        deleteDish = {this.props.deleteDish}
        permissions = {permissions }
        currentUserId = {currentUser.id}
        currentUserRoleId = { currentUser.role_id}
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
      currentUser: store.userReducer.current_user
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