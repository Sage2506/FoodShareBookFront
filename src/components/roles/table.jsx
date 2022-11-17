import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import RoleTableRowHOC from './table_row_hoc';

export class RolesTable extends Component {
  render() {
    const { roles } = this.props
    return (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Role</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {roles.map( (role, position) =>
            <RoleTableRowHOC role = {role} key={role.id} />
          )}
        </tbody>
      </Table>
    );
  }
}

export default RolesTable;
