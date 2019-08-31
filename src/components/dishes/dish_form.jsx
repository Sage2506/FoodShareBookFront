import React, { Component } from 'react';
import { Form, Button, Col, FormGroup, ListGroup } from "react-bootstrap";
import { default as Autosuggest } from "../../containers/common/autosuggest";
import { default as DishIngredientListItem } from "../../containers/dish_ingredient/dish_ingredient_list_item_container";
export class DishForm extends Component {
  
  render() {
    console.log(this.props.validated);
    return (
      <Form noValidate validated={this.props.validated} onSubmit={this.props.handleInputSubmit}>
        <Form.Group as={Col} xl={8} xs={12} controlId="name" >
          <Form.Label>Dish name</Form.Label>
          <Form.Control
            type="text" 
            value={this.props.name }
            placeholder="Describe a dish name" 
            onChange={this.props.handleInputChange}
            isValid={this.props.name !== ""}/>
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
          value={this.props.description }
          placeholder="write a dish description" 
          onChange={this.props.handleInputChange}
          isValid={this.props.description !== ""}/>
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
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
              placeholder="Ingrediente"
              type="text" 
              value={this.props.new_ingredient.ingredient_name}
              />
          </Col>
          <Col>
          <Form.Control as="select"
            onChange={this.props.handleSelectChange}
            disabled={this.props.new_ingredient.ingredient_id === -1 || this.props.measures.length < 1}>
                    <option>Medida...</option>
                    {this.props.measures.map( measure => 
                      <option key={`m_${measure.id}`} value={measure.id}>{measure.name}</option>
                    )}
          </Form.Control>
          </Col>
          <Col>
          <Form.Control
                  type="number" 
                  placeholder="Cantidad"
                  disabled={this.props.new_ingredient.measure_id === -1}
                  value={this.props.new_ingredient.quantity}
                  onChange={this.props.handleInputQuantityChange}
                  onKeyDown={this.props.onKeyDown}
                  />
          </Col>
          <Col xl={1} xs={1}>
          <Button
                  disabled={this.props.new_ingredient.ingredient_id === -1 || this.props.new_ingredient.quantity === "" || this.props.new_ingredient.quantity < 0.05  || this.props.new_ingredient.measure_id === -1 }
                  variant="info"
                  onClick={this.props.addNewIngredient}
                  ><i className="fas fa-plus"></i></Button>
          </Col>
        </Form.Row>
        <ListGroup>
        {this.props.dish_ingredients.map( dish_ingredient =>
        <ListGroup.Item> <DishIngredientListItem dish_ingredient={dish_ingredient} ></DishIngredientListItem> </ListGroup.Item>
          )}
          </ListGroup>
        </FormGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    );
  }
}

export default DishForm;
