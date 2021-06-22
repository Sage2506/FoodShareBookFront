import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserDataById } from '../../services/user_requests';
import { getAllPermissionTypes } from '../../services/permissions_type_requests';
import { UserForm } from './form';
import { getAllPermissions } from '../../services/permissions_requests';
import UserPermissionForm from './user_permission_form';

export class UserPermissionFormHOC extends Component {

  componentDidMount() {
    this.props.getPermissionTypes();
    this.props.getPermissions();
  }

  render() {
    const { user, permissions, permissionTypes } = this.props
    const parsedPermissions = {}
    permissions.forEach( permission => {
      if(!parsedPermissions[permission.permission_type_id]){
        parsedPermissions[permission.permission_type_id] = [permission]
      } else {
        parsedPermissions[permission.permission_type_id].push(permission)
      }
    })
    return(
      <UserPermissionForm user = {user} permissions = {permissions} parsedPermissions = {parsedPermissions} permissionTypes = {permissionTypes}/>
    );
  }
}

const mapStateToProps = ( store ) => ({
  permissions : store.permissionReducer.permissions,
  permissionTypes: store.permissionTypeReducer.permissionTypes
})

const mapDispatchToProps = (dispatch) => ({
  getPermissions: () => {
    dispatch( getAllPermissions())
  },
  getPermissionTypes: () => {
    dispatch( getAllPermissionTypes())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPermissionFormHOC);