import React, {Component} from 'react';
import UserPermissionFormHOC from '../permissions/user_permission_form_hoc';


export class UserForm extends Component{
  componentDidMount() {
  }

  render() {
    const { user, getUser, getUserPermissions } = this.props
    return(
      <div>
        New component UserForm { user.email }
        <UserPermissionFormHOC userPermissions = {user.permissions} userId = {user.id} getUser={getUser} getUserPermissions={getUserPermissions}/>
      </div>
    );
  }
}

export default UserForm;