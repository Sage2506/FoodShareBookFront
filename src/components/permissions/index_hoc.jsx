import React, {Component} from 'react';
import { connect } from 'react-redux';
import PermissionsIndex from '.';
import { getPermissions } from '../../actions/permission';
import { getAndDispatch } from '../../services/common_requests';

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
  getPermissions: (params) => {
    dispatch( getAndDispatch({
      path:`permissions`,
      action: getPermissions,
      params: { page : 1, per_page : 10, ...params}
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PermissionsIndexHOC);