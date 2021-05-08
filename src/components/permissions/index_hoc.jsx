import React, {Component} from 'react';
import { connect } from 'react-redux';
import PermissionsIndex from '.';
import { getAllPermissions } from '../../services/permissions_requests';

export class PermissionsIndexHOC extends Component {

  componentDidMount() {

    this.props.getPermissions();// TODO: create permission get routes
  }

  render() {
    const { permissions } = this.props
    return(
      <PermissionsIndex permissions = {permissions}></PermissionsIndex>
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