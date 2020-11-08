import React, { Component } from 'react';
import RolesTable from './table';

export class RolesTableHOC extends Component {
  render() {
    const { roles } = this.props
    return (
      <RolesTable
        roles = { roles }
      />
    );
  }
}

export default RolesTableHOC;
