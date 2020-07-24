import React, { Component } from 'react';
import { UsersTable } from "./table";
export class UsersTableHOC extends Component {

  componentDidMount = () => {

  }

  render() {
    const { users } = this.props

    var empty_rows = []
    for(let i = 0; i < 10 - users.length; i++){
      empty_rows.push(i);
    }
    return (
      <UsersTable
        users = {users}
        empty_rows = {empty_rows}
      />


    );
  }
}

export default UsersTableHOC;
