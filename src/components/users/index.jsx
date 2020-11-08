import React, { Component } from 'react';
import { UsersTableHOC } from "./table_hoc";
export class UsersIndex extends Component {
  render() {
    const { users } = this.props
    return (
      <UsersTableHOC users = { users }/>
    );
  }
}

export default UsersIndex;
