import React, {Component} from 'react';
import { Form } from 'react-bootstrap';
export class UserPermissionForm extends Component {
  componentDidMount() {
  }

  render() {
    const { user, permissions } = this.props
    return(
      <div>
        New component UserPermissionForm { user.email }
        { permissions.map(permission =>
        <div key={permission.id}>
        <Form.Group  controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={permission.name} />
        </Form.Group>
        <div>{permission.description}</div>
        </div>
        )}
      </div>
    );
  }
}

export default UserPermissionForm;