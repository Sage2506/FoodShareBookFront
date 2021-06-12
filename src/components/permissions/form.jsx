import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';

export class PermissionsForm extends Component {


  render() {
    const { permission, formSubmited, roles, permissionTypes, handleInputChange, handleSubmit } = this.props
    const { name, description, permission_type_id, role_id } = permission
    return(
      < Form onSubmit = { handleSubmit } >
        <Form.Group controlId = "name">
          <Form.Label>
            Name
          </Form.Label>
          <Form.Control
            type = "text"
            value = { name }
            placeholder = "Enter permission name."
            onChange = {handleInputChange}
            isInvalid = { formSubmited && (name === "" || name.includes(" "))}/>
            <Form.Control.Feedback type = "invalid">
              Please write a valid permission name.
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId = "description">
          <Form.Label>
            Description
          </Form.Label>
          <Form.Control
            type = "text"
            value = { description }
            placeholder = "Enter permission description."
            onChange = {handleInputChange}
            isInvalid = { formSubmited && description === ""  }/>
            <Form.Control.Feedback type = "invalid">
              Please write a valid permission description.
            </Form.Control.Feedback>
          </Form.Group>
        <Form.Group controlId = "permission_type_id">
        <Form.Control
            as="select"
            onChange={ handleInputChange }
            value={ permission_type_id }
            isInvalid = { formSubmited && permission_type_id === "-1" }
          >
            <option value={-1} >Seleccionar tipo de permiso</option>
            { permissionTypes.map( (permissionType) => <option key={`m_${permissionType.id}`} value={permissionType.id}>{permissionType.name}</option> ) }
          </Form.Control>
        </Form.Group>
        <Form.Group controlId = "role_id">
        <Form.Control
            as="select"
            onChange={ handleInputChange }
            value={ role_id }
            isInvalid = { formSubmited && permission_type_id === "-1" }
          >
            <option value={-1}>Seleccionar tipo de Rol</option>
            { roles.map( (role) => <option key={`m_${role.id}`} value={role.id}>{role.name}</option> ) }
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Button type="submit">
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default PermissionsForm;