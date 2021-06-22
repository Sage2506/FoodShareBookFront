import React, {Component} from 'react';
import UserPermissionFormHOC from '../permissions/user_permission_form_hoc';

export class UserForm extends Component {
  componentDidMount() {
  }

  render() {
    const { user } = this.props
    return(
      <div>
        New component UserForm { user.email }
        <UserPermissionFormHOC user = { user }/>
      </div>
    );
  }
}

export default UserForm;