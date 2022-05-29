import React, { Component } from 'react';
import { connect } from 'react-redux';
import MeasuresIndex from '.';
import { updatePermissions } from '../../lib/common';
import { getCurrentUserPermissionByType } from '../../services/permissions_type_requests';

export class MeasuresIndexHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permissions: {
        create: false,
        delete: false,
        edit: false
      }
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

  render() {
    const { permissions } = this.state
    return (
      <MeasuresIndex
        permissions={permissions}
      />
    );
  }
}

const mapStateToProps = store => {
  return {
    currentUser: store.userReducer.current_user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUserPermissionsByType: () => {
      dispatch(getCurrentUserPermissionByType(7))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MeasuresIndexHOC)