import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
import IPermissionType, {IPermissions} from '../../interfaces/permission_types';

interface IUserPermissionForm {
  permissionTypes : IPermissionType[],
  userPermissions : IPermissions[],
}
export class UserPermissionForm extends Component<IUserPermissionForm> {
  componentDidMount() {
  }

  render() {
    const { userPermissions, permissionTypes } = this.props
    return(
      <div>
        New component UserPermissionForm { userPermissions.length }
        <hr/>
        All Permissions types {permissionTypes.length}
        {permissionTypes.map( permissionType => (
          <div key={permissionType.id}>
            {permissionType.id}
            {permissionType.name}
          </div>
        ))}
      </div>
    );
  }
}

export default UserPermissionForm;