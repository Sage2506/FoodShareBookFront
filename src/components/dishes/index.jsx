import React, { Component } from 'react';
import { connect } from "react-redux";
import { getDishes } from "../../services/dish_requests";
import { clearError } from '../../actions/error';
import { default as Pagination } from '../common/pagination';
import { Modal, Button } from 'react-bootstrap';
import { DishTable } from './table';
import { FloatingActionButtonPlus } from '../common/floating_action_button';
import { getCurrentUserPermissionByType } from '../../services/permissions_type_requests';
import { updatePermissions } from '../../lib/common';
import { showError } from '../lib/common';

export class DishesIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false,
      permissions: {
        create: false,
        delete: false,
        edit: false
      }
    }
  }

  componentDidMount() {
    let { getDishes, pagination, getCurrentUserPermissionsByType } = this.props;
    getDishes(pagination.currentPage);
    getCurrentUserPermissionsByType();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { permissions: prevPermissions } = prevProps.currentUser
    const { permissions: newPermissions } = this.props.currentUser
    if (prevPermissions.length !== newPermissions.length || (prevPermissions.length !== 0 && prevPermissions[0].id !== newPermissions[0].id)) {
      updatePermissions(this)
    }
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    let { pagination, getDishes, dishes, currentUser } = this.props;
    let { show, permissions } = this.state;

    return (
      <div>
        <DishTable
          dishes={dishes}
          per_page={pagination.pageSize}
          permissions={permissions}
          currentUserId={currentUser.id}
          currentUserRoleId={currentUser.role_id}
          getDishes={this.props.getDishes}
          showError={this.props.showError}
        />
        <Pagination
          pagination={pagination}
          paginationRequest={getDishes}
        />
        {permissions.create &&
          <FloatingActionButtonPlus
            link='/dishes/new'
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

const mapStateToProps = (store) => {
  return {
    dishes: store.dishReducer.dishes,
    pagination: store.dishReducer.pagination,
    currentUser: store.userReducer.current_user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDishes: (params) => {
      dispatch(getDishes(params))
    },
    clearError: () => {
      dispatch(clearError())
    },
    getCurrentUserPermissionsByType: () => {
      dispatch(getCurrentUserPermissionByType(1))
    },
    showError: error => {
      dispatch(showError(error))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishesIndex)