import React, {Component} from 'react';
import { connect } from 'react-redux';
import { UserForm } from './form';

export class UserFormHOC extends Component {

  componentDidMount() {
    if ( this.props.location.pathname.split('/')[2] === 'edit'){
      console.log("por editar");
    }
  }

  render() {
    return(
      <UserForm />
    );
  }
}

const mapStateToProps = ( store ) => ({
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(UserFormHOC);