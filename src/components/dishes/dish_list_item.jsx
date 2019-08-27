import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {default as DishIngredientListItem} from '../dish_ingredients/dish_ingredient_list_item_hoc'
import { ListGroup, Image, Col } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class DishListItem extends Component {
  render() {  
    return (
        <Col md ={12} lg={12} xl={6}>
        <LinkContainer to={'/dishes/'+this.props.dish_id}>
          <div>
        <p>id {this.props.dish_id}</p>
        <Image src={this.props.dish_image} alt="La imagen del platillo" fluid />
        <h3>{this.props.dish_name}</h3>
        <h4>{this.props.dish_description}</h4>
        <h4>{this.props.dish_recipe}</h4>
        <ListGroup>
          {this.props.dish_ingredients.map( dish_ingredient => <DishIngredientListItem dish_ingredient = {dish_ingredient} key = {this.props.dish_id.toString()+' '+dish_ingredient.measure_id.toString()}></DishIngredientListItem>)}
        
        </ListGroup>
        </div>
        </LinkContainer>

        </Col>
    );
  }
}

DishListItem.propTypes = {
  position : PropTypes.number.isRequired,
  dish_name : PropTypes.string,
  dish_image : PropTypes.string,
  dish_description : PropTypes.string,
  dish_recipe : PropTypes.string,
  dish_id : PropTypes.number.isRequired,
}

DishListItem.defaultProps = {
  dish_name : "Nombre de platillo",
  dish_image : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg",
  dish_description : "Descripcion del platillo",
  dish_recipe : "Receta del platillo",
  dish_id : 2.0,
}

export default DishListItem;
