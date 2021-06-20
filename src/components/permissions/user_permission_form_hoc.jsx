import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserDataById } from '../../services/user_requests';
import { UserForm } from './form';
import { getAllPermissions } from '../../services/permissions_requests';
import UserPermissionForm from './user_permission_form';

export class UserPermissionFormHOC extends Component {

  componentDidMount() {
    this.props.getPermissionTypes();
    this.props.getPermissions();
  }

  render() {
    const { user, permissions } = this.props
    const parsed_permissions = {}
    permissions.forEach( permission => {
      if(!parsed_permissions[permission.permission_type_id]){
        parsed_permissions[permission.permission_type_id] = [permission]
      } else {
        parsed_permissions[permission.permission_type_id].push(permission)
      }
    })
    return(
      <UserPermissionForm user = {user} permissions = {permissions} />
    );
  }
}

const mapStateToProps = ( store ) => ({
  permissions : store.permissionReducer.permissions
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