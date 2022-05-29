import React, { Component } from 'react';
import { Form, Button, Col } from "react-bootstrap";
export default class MeasureForm extends Component {
  render() {
    const { validated, handleInputSubmit, name, handleInputChange } = this.props
    return (
      <Form noValidate validated={validated} onSubmit={handleInputSubmit}>
        <Form.Group as={Col} xl={8} xs={12} controlId="name" >
          <Form.Label>Measure name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder="Describe an measure name"
            onChange={handleInputChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please write a dish name.
          </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Set a fancy name
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}