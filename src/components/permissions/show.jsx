import React, {Component} from 'react';
import { Button } from 'react-bootstrap'
import { LinkContainer } from "react-router-bootstrap";
export class PermissionShow extends Component {
  render() {
    const { permission, goBack }= this.props
    return(
      <div>
        <h2>{permission.id} - {permission.name}</h2>
        <p>{permission.description}</p>
        <LinkContainer to={'/permissions/edit/'+permission.id}><Button variant="info" title="Editar"><i className="far fa-edit"></i></Button></LinkContainer>
        <Button title="Atrás" onClick={goBack} ><i className="fas fa-long-arrow-alt-left"></i></Button>
      </div>
    );
  }
}

export default PermissionShow;