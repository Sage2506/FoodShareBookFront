import React, { Component } from 'react';
import { UsersIndex } from "./index";
import { connect } from 'react-redux';
import { getAndSendAction } from '../../services/common_requests';
import { getUsers } from '../../actions/user';
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
    dispatch ( getAndSendAction({
      path:`users`,
      action: getUsers,
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UsersIndexHOC);
