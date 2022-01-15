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
    const { permissions, getPermissions } = this.props
    return(
      <PermissionsIndex permissions = {permissions} getPermissions = { getPermissions }></PermissionsIndex>
    );
  }
}

const mapStateToProps = ( store ) => ({
  permissions : store.permissionReducer.permissions
})

const mapDispatchToProps = (dispatch) => ({
  getPermissions: () => {
    dispatch( getAllPermissions())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PermissionsIndexHOC);