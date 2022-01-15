import React, { Component } from 'react';
import UserTableRow from './table_row';

export class UserTableRowHOC extends Component {
  render() {
    const {user} = this.props
    return (
      <UserTableRow user={user}/>
    );
  }
}

export default UserTableRowHOC;
