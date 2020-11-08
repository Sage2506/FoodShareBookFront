import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import UserTableRowHOC from './table_row_hoc';

export class UsersTable extends Component {
  render() {
    const { users, empty_rows } = this.props
    return (
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { users.map( (user, position) =>
            <UserTableRowHOC user={user} key={user.id}/>
          )}
          { empty_rows.map( (row, position) =>
          <tr key = {position}>
            <td colSpan={3} > - </td>
          </tr>
          ) }
        </tbody>
      </Table>
    );
  }
}

export default UsersTable;
