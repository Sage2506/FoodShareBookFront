import React, {Component} from 'react';
import PermissionsTable from './table';
export class PermissionsTableHOC extends Component {

  componentDidMount() {
  }

  render() {
    const { permissions } = this.props
    return(
      <div>
        <PermissionsTable permissions = { permissions }></PermissionsTable>
      </div>
    );
  }
}

export default PermissionsTableHOC;