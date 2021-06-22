import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getUserDataById } from '../../services/user_requests';
import { UserForm } from './form';

export class UserFormHOC extends Component {

  componentDidMount() {
    if ( this.props.location.pathname.split('/')[2] === 'edit'){
      this.props.getUser(this.props.match.params.id)
    }
  }

  render() {
    const { user } = this.props
    return(
      <UserForm user = {user} />
    );
  }
}

const mapStateToProps = ( store ) => ({
  user : store.userReducer.user
})

const mapDispatchToProps = (dispatch) => ({
  getUser: id => {
    dispatch( getUserDataById(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserFormHOC);