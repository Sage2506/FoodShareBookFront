import React, {Component} from 'react';
import IUser from '../../interfaces/users,';
import UserPermissionFormHOC from '../permissions/user_permission_form_hoc';


export class UserForm extends Component<{user : IUser}>{
  componentDidMount() {
  }

  render() {
    const { user } = this.props
    return(
      <div>
        New component UserForm { user.email }
        <UserPermissionFormHOC userPermissions = {user.permissions}/>
      </div>
    );
  }
}

export default UserForm;