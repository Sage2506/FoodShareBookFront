import React, {Component} from 'react';

export class PermissionsTableRow extends Component {
  render() {
    const { permission } = this.props
    const { id, name, description } = permission
    return(
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{description}</td>
      </tr>
    );
  }
}

export default PermissionsTableRow;