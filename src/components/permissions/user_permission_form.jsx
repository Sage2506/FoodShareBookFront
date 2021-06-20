import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
export class UserPermissionForm extends Component {
  componentDidMount() {
  }

  render() {
    const { user, permissions, parsedPermissions, permissionTypes } = this.props
    console.log('Parsed permissions',parsedPermissions);
    console.log('Permission Types', permissionTypes);
    return(
      <div>
        New component UserPermissionForm { user.email }
        { Object.keys(parsedPermissions).map( key=>
          <div key={key}>
          <div>{permissionTypes.find( permission => permission.id == key).name}</div>
          <hr/>
          {  parsedPermissions[key].map( permission =>
              <div key={permission.id}>
                <Form.Group  controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label={permission.name} />
                </Form.Group>
                <div>{permission.description}</div>
              </div>
              )
          }
          </div>
        )}
      </div>
    );
  }
}

export default UserPermissionForm;