import React, {Component} from 'react';
import { connect } from 'react-redux';
import PermissionsIndex from '.';
import { getAllPermissions } from '../../services/permissions_requests';
import { getAllPermissionTypes } from '../../services/permissions_type_requests';

export class PermissionsIndexHOC extends Component {

  componentDidMount() {

    this.props.getPermissions();

  }

  render() {
    const { permissions, getPermissions, pagination  } = this.props
    return(
      <PermissionsIndex permissions = {permissions} getPermissions = { getPermissions } pagination = {pagination }></PermissionsIndex>
    );
  }
}

const mapStateToProps = ( store ) => ({
  permissions : store.permissionReducer.permissions,
  pagination : store.permissionReducer.pagination
})

const mapDispatchToProps = (dispatch) => ({
  getPermissions: (page = 1, per_page = 10) => {
    dispatch( getAllPermissions(page, per_page))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PermissionsIndexHOC);