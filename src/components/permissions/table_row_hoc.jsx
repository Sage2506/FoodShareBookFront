import React, {Component} from 'react';
import PermissionsTableRow from './table_row';

export class PermissionsTableRowHOC extends Component {
  render() {
    const { permission } = this.props
    return(
      <PermissionsTableRow permission = { permission }></PermissionsTableRow>
    );
  }
}

export default PermissionsTableRowHOC;