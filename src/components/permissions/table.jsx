import React, {Component} from 'react';
import { Table } from 'react-bootstrap';
import PermissionsTableRowHOC from './table_row_hoc';

export class PermissionsTable extends Component {

  componentDidMount() {
    const { permissions } = this.props
  }

  render() {
    const { permissions } = this.props
    return(
      <Table>
        <thead>
          <tr>
            <th></th>
          </tr>
        </thead>
        <tbody>
          { permissions.map( (permission, position ) =>
            <PermissionsTableRowHOC permission = { permission } key={permission.id}></PermissionsTableRowHOC>
          )}
        </tbody>
      </Table>
    );
  }
}

export default PermissionsTable;