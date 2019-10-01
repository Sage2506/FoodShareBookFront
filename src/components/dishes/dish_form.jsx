import React, { Component } from 'react';
import { Form, Button, Col, FormGroup, ListGroup } from "react-bootstrap";
import { default as Autosuggest } from "../../containers/common/autosuggest";
import { default as DishIngredientListItem } from "../../containers/dish_ingredient/dish_ingredient_list_item_container";
import { default as Dropzone } from "../common/dropzone_hoc";
export class DishForm extends Component {
  
  render() {
    let {
      name,
      description,
      recipe,
      handleInputChange,
      validated,
      selected_item,
      new_ingredient,
      measures,
      addNewIngredient,
      dish_ingredients,
      handleInputSubmit,
      handleSelectChange,
      handleInputQuantityChange,
      onKeyDown,
      onImageSelected
    } = this.props

    let {
      ingredient_name,
      quantity,
      measure_id,
      ingredient_id,
    } = new_ingredient

    return (
      <Form noValidate validated={validated} onSubmit={handleInputSubmit}>
        <Form.Group as={Col} xl={8} xs={12} controlId="name" >
          <Form.Label>Dish name</Form.Label>
          <Form.Control
            type="text" 
            value={name }
            placeholder="Describe a dish name" 
            onChange={handleInputChange}
            isValid={name !== ""}/>
            <Form.Control.Feedback type="invalid">
              Please write a valid dish name.
            </Form.Control.Feedback>
          <Form.Text className="text-muted">
            Set a fancy name
          </Form.Text>
        </Form.Group> 
        <Form.Group as={Col} xl={8} xs={12} controlId="image">
          <Form.Label>Dish image</Form.Label>
          <Dropzone 
            onImageSelected={onImageSelected}
          />
        </Form.Group>
        <Form.Group as={Col} xl={8} xs={12} controlId="description" >
          <Form.Label>description</Form.Label>
          <Form.Control 
            as="textarea" 
            value={description }
            placeholder="write a dish description" 
            onChange={handleInputChange}
            isValid={description !== ""}/>
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
            value={recipe }
            placeholder="Give me the recipe" 
            onChange={handleInputChange}/>
          <Form.Text className="text-muted">
            Now for the recipe
          </Form.Text>
        
        </Form.Group>
        <Form.Group as={Col} xl={8} xs={12}>
          <Form.Label>Ingrediente</Form.Label>
          <Autosuggest selected_item={selected_item} />
        </Form.Group>
        <FormGroup as={Col} xl={8} xs={12}>
        <Form.Row>
          <Col xl={6} xs={5}>
            <Form.Control
              disabled
              placeholder="Ingrediente"
              type="text" 
              value={ingredient_name}
            />
          </Col>
          <Col>
          <Form.Control as="select"
            onChange={handleSelectChange}
            disabled={ingredient_id === -1 || measures.length < 1}
          >
            <option>Medida...</option>
            {measures.map( (measure) => 
              <option key={`m_${measure.id}`} value={measure.id}>{measure.name}</option>
              )
            }
          </Form.Control>
          </Col>
          <Col>
          <Form.Control
            type="number" 
            placeholder="Cantidad"
            min="0"
            disabled={measure_id === -1}
            value={quantity}
            onChange={handleInputQuantityChange}
            onKeyDown={onKeyDown}
            />
          </Col>
          <Col xl={1} xs={1}>
          <Button
            disabled={ingredient_id === -1 || quantity === "" || quantity < 0.005  || new_ingredient.measure_id === -1 }
            variant="info"
            onClick={addNewIngredient}
            >
            <i className="fas fa-plus"></i></Button>
          </Col>
        </Form.Row>
        <ListGroup>
          {dish_ingredients.map( (dish_ingredient, index) =>
            <ListGroup.Item key={index}> <DishIngredientListItem dish_ingredient={dish_ingredient} ></DishIngredientListItem> </ListGroup.Item>
            )
          }
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
