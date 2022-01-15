import React, { Component } from 'react';
import { UsersIndex } from "./index";
import { getAllUsers } from '../../services/user_requests';
import { connect } from 'react-redux';
export class UsersIndexHOC extends Component {

  componentDidMount(){
    this.props.getAllUsers();
  }


  render() {
    const { users } = this.props
    return (
      <UsersIndex
        users = { users }
      />
    );
  }
}

const mapStateToProps = ( store ) => ({
  users: store.userReducer.users
})

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => {
    dispatch( getAllUsers())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndexHOC);
