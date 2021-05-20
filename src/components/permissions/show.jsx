import React, {Component} from 'react';

export class PermissionShow extends Component {
  render() {
    const { permission }= this.props
    return(
      <div>
        <h2>{permission.id} - {permission.name}</h2>
        <p>{permission.description}</p>
      </div>
    );
  }
}

export default PermissionShow;