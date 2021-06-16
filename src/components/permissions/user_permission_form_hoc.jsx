import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserDataById } from '../../services/user_requests';
import { UserForm } from './form';
import { getAllPermissions } from '../../services/permissions_requests';
import UserPermissionForm from './user_permission_form';

export class UserPermissionFormHOC extends Component {

  componentDidMount() {
    this.props.getPermissions();
  }

  render() {
    const { user, permissions } = this.props
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPermissionFormHOC);