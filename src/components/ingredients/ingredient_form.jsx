import React, { Component } from 'react';
import { Form, Button, Col, FormGroup, ListGroup } from "react-bootstrap";

export class IngredientForm extends Component {

  render() {
    let {
      name,
      description,
      image,
      measures,
      measuresCatalog,
      showCloudinaryWidget,
      validated,
      handleInputChange,
      handleInputSubmit,
    } = this.props
    return (
      <Form noValidate validated={validated} onSubmit={handleInputSubmit}>
        <Form.Group as={Col} xl={8} xs={12} controlId="name" >
          <Form.Label>Ingredient name</Form.Label>
          <Form.Control
            type="text" 
            value={name }
            placeholder="Describe an ingredient name" 
            onChange={handleInputChange}
            isValid={name !== ""}/>
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Set a fancy name
          </Form.Text>
          </Form.Group> 
          <Form.Group as={Col} xl={8} xs={12} controlId="description" >
          <Form.Label>description</Form.Label>
          <Form.Control 
            as="textarea" 
            value={description }
            placeholder="write a Ingredient description" 
            onChange={handleInputChange}
            isValid={description !== ""}/>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Give it a description
          </Form.Text>
        </Form.Group>
        <Form.Group as={Col} controlId="formBasicCheckbox">
        <Form.Label>Measures</Form.Label>
          {measuresCatalog.map( measure => 
            <Form.Check 
              key={'measure_id_'+measure.id} 
              type="checkbox" 
              value={measure.id} 
              label={measure.name} 
              onChange={handleInputChange} 
              checked={measures.includes(measure.id)}
            />
            )}
        </Form.Group>
        <Button variant="info" onClick={showCloudinaryWidget}>Upload Photo</Button>
        <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    );
  }
}

export default IngredientForm;
