import React, { Component } from 'react';

export  class RoleShow extends Component {
  render() {
    const { role } = this.props
    const {name, permissions} = role

    return (
      <div>
        <h1>{name}</h1>
        <hr/>
        <ul>
        {permissions.map( (permission) =>
            <li key = {permission.id} >{permission.type_name}</li>
            ) }
        </ul>
      </div>
    );
  }
}

export default RoleShow;
