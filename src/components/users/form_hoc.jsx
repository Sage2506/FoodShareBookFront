import React, {Component} from 'react';
import { connect } from 'react-redux';
import { UserForm } from './form';

export class UserFormHOC extends Component {

  componentDidMount() {
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