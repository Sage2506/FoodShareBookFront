import React, { Component } from 'react';
import { Form, Button, Col } from "react-bootstrap";
export default class MeasureForm extends Component {
  render() {
    const { validated, handleInputSubmit, name, handleInputChange, group, equivalent } = this.props
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
        <Form.Group as={Col} xl={8} xs={12} controlId="group" >
          <Form.Label>Group</Form.Label>
          <Form.Control as="select" onChange={handleInputChange} value={group}>
            <option value={'solid'}>Solid</option>
            <option value={'liquid'}>Liquid</option>
            <option value={'piece'}>Piece</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} xl={8} xs={12} controlId="equivalent">
          <Form.Label>Equivalent</Form.Label>
          <Form.Control
            type="number"
            value={equivalent || ''}
            placeholder={'Set equivalent to group'}
            onChange={handleInputChange}
            step='0.001'
            required
          />

        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}