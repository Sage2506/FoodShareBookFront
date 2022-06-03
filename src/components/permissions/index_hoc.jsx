import React, {Component} from 'react';
import { connect } from 'react-redux';
import PermissionsIndex from '.';
import { getPermissions } from '../../services/permissions_requests';

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
  getPermissions: (params) => {dispatch( getPermissions(params))}
})

export default connect(mapStateToProps, mapDispatchToProps)(PermissionsIndexHOC);