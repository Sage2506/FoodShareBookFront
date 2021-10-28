import RoleTableRow from './table_row';
import React, { Component } from 'react';

export class RoleTableRowHOC extends Component {
  render() {
    const { role } = this.props
    return (
      <RoleTableRow
        role = { role }
      />
    );
  }
}

export default RoleTableRowHOC;
