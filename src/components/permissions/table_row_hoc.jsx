import React, {Component} from 'react';
import PermissionsTableRow from './table_row';

export class PermissionsTableRowHOC extends Component {

  render() {
    const { permission, handleOpen } = this.props
    return(
      <PermissionsTableRow permission = { permission } handleOpen = {handleOpen} ></PermissionsTableRow>
    );
  }
}

export default PermissionsTableRowHOC;