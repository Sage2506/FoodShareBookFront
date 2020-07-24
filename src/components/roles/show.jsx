import React, { Component } from 'react';

export  class RoleShow extends Component {
  render() {
    const { role } = this.props
    const {id, name, permissions} = role

    return (
      <div>
        <h1>{name}</h1>
        <hr/>
        {permissions.map( (permission) =>
          <ul>
            <li>{permission.type}</li>
          </ul>
        ) }
      </div>
    );
  }
}

export default RoleShow;
