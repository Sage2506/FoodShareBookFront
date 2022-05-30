import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeasuresIndex from '.';
import { updatePermissions } from '../../lib/common';
import { deleteMeasure, getMeasures } from '../../services/measure_request';
import { getCurrentUserPermissionByType } from '../../services/permissions_type_requests';
import { showError } from '../lib/common';

export class MeasuresIndexHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permissions: {
        create: false,
        delete: false,
        edit: false
      },
      deleteShow: false,
      id: undefined
    }
  }

  componentDidMount() {
    this.props.getCurrentUserPermissionsByType()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { permissions: prevPermissions } = prevProps.currentUser
    const { permissions: newPermissions } = this.props.currentUser
    if (prevPermissions.length !== newPermissions.length || (prevPermissions.length !== 0 && prevPermissions[0].id !== newPermissions[0].id)) {
      updatePermissions(this)
    }
  }

  handleOpen = (id) => {
    this.setState({
      deleteShow: true,
      id,
    })
  }

  handleClose = () => {
    this.setState({
      deleteShow: false,
      id: -1
    })
  }

  deleteMeasure = id => {
    deleteMeasure(id).then(response => {
      if (response.status === 200) {
        this.handleClose();
        this.getMeasures();
      } else {
        this.props.showError(response);
      }
    })
  }
  render() {
    const { permissions, deleteShow, id } = this.state
    return (
      <MeasuresIndex
        permissions={permissions}
        handleOpen={this.handleOpen}
        deleteShow={deleteShow}
        id={id}
        handleClose={this.handleClose}
        deleteMeasure={this.deleteMeasure}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    currentUser: store.userReducer.current_user
  }
}

const mapDispatchToProps = dispatch => ({

  getCurrentUserPermissionsByType: () => {
    dispatch(getCurrentUserPermissionByType(7))
  },
  getMeasures: () => {
    dispatch(getMeasures())
  },
  showError: data => {
    dispatch(showError(data))
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(MeasuresIndexHOC)