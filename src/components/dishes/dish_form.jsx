import React, { Component } from 'react';
import { Form, Button, Col, FormGroup, Row } from "react-bootstrap";
import { default as Autosuggest } from "../../containers/common/autosuggest";
export class DishForm extends Component {
  render() {
    return (
      <Form noValidate  validated={this.props.validated} onSubmit={this.props.handleInputSubmit}>
      
        <Form.Group as={Col} xl={8} xs={12} controlId="name" >
          <Form.Label>Dish name</Form.Label>
          <Form.Control 
            type="text" 
            value={this.props.name }
            placeholder="Describe a dish name" 
            onChange={this.props.handleInputChange}/>
          <Form.Text className="text-muted">
            Set a fancy name
          </Form.Text>
          </Form.Group> 
      <Form.Group as={Col} xl={8} xs={12} controlId="description" >
        <Form.Label>description</Form.Label>
        <Form.Control 
           as="textarea" 
          value={this.props.description }
          placeholder="write a dish description" 
          onChange={this.props.handleInputChange}/>
        <Form.Text className="text-muted">
          Give it a description
        </Form.Text>
      </Form.Group>  
      <Form.Group as={Col} xl={8} xs={12} controlId="recipe" >
        <Form.Label>Recipe</Form.Label>
        <Form.Control 
           as="textarea"
          value={this.props.recipe }
          placeholder="Give me the recipe" 
          onChange={this.props.handleInputChange}/>
        <Form.Text className="text-muted">
          Now for the recipe
        </Form.Text>
      
      </Form.Group>
      <Form.Group as={Col} xl={8} xs={12}>
        <Form.Label>Ingrediente</Form.Label>
        <Autosuggest selected_item={this.props.selected_item} />
      </Form.Group>
        <FormGroup as={Col} xl={8} xs={12}>
        <Form.Row>
          <Col xl={6} xs={5}>
            <Form.Control
                  disabled
                  placeholder="Platillo"
                  type="text" 
                  value={this.props.new_ingredient.ingredient_name}
                  />
          </Col>
          <Col>
          <Form.Control
                  disabled
                  type="text" 
                  placeholder="Medida"
                  //value={this.props.new_ingredient.ingredient_name}
                  />
          </Col>
          <Col>
          <Form.Control
                  disabled
                  type="text" 
                  placeholder="Cantidad"
                  //value={this.props.new_ingredient.ingredient_name}
                  />
          </Col>
          <Col xl={1} xs={1}>
          <Form.Control
                  type="button"
                  ></Form.Control>
          </Col>
        </Form.Row>
        </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    );
  }
}

export default DishForm;
