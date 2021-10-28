import React, { Component } from 'react';
import RolesTableHOC from './table_hoc';

export class RolesIndex extends Component {
  render() {
    const { roles } = this.props
    return (
      <RolesTableHOC
        roles = { roles }
      />
    );
  }
}

export default RolesIndex;
