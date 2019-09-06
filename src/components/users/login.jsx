import React, { Component } from 'react';
import { Container, Form, Button } from "react-bootstrap";
export class Login extends Component {
  render() {
    let { 
      email , 
      email_v, 
      password_v, 
      password , 
      handleInputChange,
      handleInputSubmit
    } = this.props
    return (
      <Container>
        <Form noValidate onSubmit={handleInputSubmit} >
          <Form.Group controlId="email">
            <Form.Control
              type="email"
              value = { email }
              placeholder = "Email"
              onChange = { handleInputChange }
              isInvalid = { !email_v }
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              type="password"
              value = { password }
              placeholder = "Password"
              onChange = { handleInputChange }
              isInvalid = { !password_v }
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
