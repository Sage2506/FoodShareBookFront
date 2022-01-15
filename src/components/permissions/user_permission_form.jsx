import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import IPermissionType, { IPermissions } from '../../interfaces/permission_types';

interface IUserPermissionForm {
  loading: boolean,
  permissionTypes: IPermissionType[],
  userPermissions: IPermissions[],
  permissionsToRemove: number[],
  permissionsToAdd: number[],
  handleChecboxClick: Function,
  handlePermissionsSubmit: Function
}

export class UserPermissionForm extends Component<IUserPermissionForm> {
  handleCheckboxChance = (e: any) => {
  }

  render() {
    const { userPermissions, permissionTypes, permissionsToAdd, permissionsToRemove, handleChecboxClick, handlePermissionsSubmit, loading } = this.props
    return (
      <Form onSubmit={e => handlePermissionsSubmit(e, permissionsToAdd, permissionsToRemove)}>
        New component UserPermissionForm {userPermissions.length}
        <hr />
        All Permissions types
        {permissionTypes.map(permissionType => (
          <div key={permissionType.id}>
            <div>
              <h6> {permissionType.id} - {permissionType.name} </h6>
            </div>

            {permissionType.permissions.map(permission => (
              <Form.Group key={permission.id}>
                <Form.Check
                  id={permission.id.toString()}
                  label={permission.id + '-' + permission.description }
                  checked={
                    userPermissions.findIndex(userPermission => userPermission.permission_id === permission.id) !== -1 ?
                      !permissionsToRemove.includes(permission.id) :
                      permissionsToAdd.includes(permission.id)
                  }
                  onClick={e => handleChecboxClick(e)}
                  onChange={this.handleCheckboxChance} />
              </Form.Group>
            ))}

          </div>
        ))}
        <ul>
          <li>permission to add:</li>
          {permissionsToAdd.map(permission_id =>
            <li key={permission_id}>{permission_id}</li>
          )}
          <li>permission to remove:</li>
          {permissionsToRemove.map(permission_id =>
            <li key={permission_id}>{permission_id}</li>
          )}
        </ul>
        <Button variant="primary" type="submit" disabled={(permissionsToRemove.length + permissionsToAdd.length < 1) || loading}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default UserPermissionForm;