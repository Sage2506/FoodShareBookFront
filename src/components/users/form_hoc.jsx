import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setUser, setUserPermissions } from '../../actions/user';
import { getAndDispatch } from '../../services/common_requests';
import { UserForm } from './form';

export class UserFormHOC extends Component {

  componentDidMount() {
    if ( this.props.location.pathname.split('/')[2] === 'edit'){
      this.props.getUser(this.props.match.params.id);
      this.props.getUserPermissions(this.props.match.params.id);
    }
  }

  render() {
    const { user, getUser, getUserPermissions } = this.props
    return(
      <UserForm user = {user} getUser = {getUser} getUserPermissions = {getUserPermissions}/>
    );
  }
}

const mapStateToProps = store => ({
  user : store.userReducer.user
})

const mapDispatchToProps = dispatch => ({
  getUser: id  => {
    dispatch( getAndDispatch ({
      path:`users/${id}`,
      action: setUser
    }))
  },
  getUserPermissions: id => {
    dispatch( getAndDispatch ({
      path:`users/${id}/permissions`,
      action: setUserPermissions
    }))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserFormHOC);