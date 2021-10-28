import React, {Component} from 'react';
import { connect } from 'react-redux';
import IUser from '../../interfaces/users';
import { getUserDataById, getUserPermissionsById } from '../../services/user_requests';
import { UserForm } from './form';

interface UserFormProps {
  location : {
    pathname : string
  },
  match:{
    params:{
      id: number
    }
  },
  user : IUser,
  getUser: Function,
  getUserPermissions: Function
}

export class UserFormHOC extends Component<UserFormProps> {

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

const mapStateToProps = ( store : any ) => ({
  user : store.userReducer.user
})

const mapDispatchToProps = (dispatch : any) => ({
  getUser: (id : number) => {
    dispatch( getUserDataById(id))
  },
  getUserPermissions: (id: number) => {
    dispatch ( getUserPermissionsById(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserFormHOC);