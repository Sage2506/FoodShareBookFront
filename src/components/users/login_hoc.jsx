import React, { Component } from 'react';
import { Login } from "./login";

export class LoginHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : {
        email : '',
        password : '',
      },
      validation :{
        email_v : true,
        password_v :  true
      }
    }
  }

  handleInputChange = e => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.id] : e.target.value
      }
    })
  }

  handleInputSubmit = e => {
    e.preventDefault();
    let { user, validation } = this.state
    let { email, password } = user
    if (email === ''){
      this.setState({
        validation: {
          ...validation,
          email_v : false
        }
      })
    } else if ( password === ''){
      this.setState({
        validation: {
          ...validation,
          password_v : false
        }
      })
    } else {
      this.props.log_in(user);
    }
  }

  render() {
    let { user, validation } = this.state;
    let { email, password } = user;
    let { email_v, password_v} = validation
    return (
      <Login 
        email = {email}
        email_v = { email_v }
        password = { password }
        password_v = { password_v}
        handleInputChange = {this.handleInputChange}
        handleInputSubmit = {this.handleInputSubmit}
      />
    );
  }
}

export default LoginHOC;
