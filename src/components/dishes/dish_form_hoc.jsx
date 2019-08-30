import React, { Component } from 'react';
import { DishForm } from "./dish_form";
import { Redirect } from 'react-router-dom'

export class DishFormHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: {
        name: "",
        description:"",
        recipe: "",
        image: "",
        dish_ingredients: []
      },
      validated : false,
      setValidated : false
    };
  }

  create_dish = () => {
    this.props.create_dish(this.state.dish);
  }

  handleInputChange = e => {   
    this.setState({
      dish: {
        ...this.state.dish,
        [e.target.id] : e.target.value
      }
    })
  }

  handleReset = () => {
    this.setState({
      dish: {
        name: "",
        description:"",
        recipe: "",
        image: "",
        dish_ingredients: []
      }
    })
  }

  handleInputSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    /*
    this.props.create_dish(this.state.dish)
    this.handleReset()    */
  }
  render() {
    if(this.props.newDish.id === undefined ){
      return (
        <DishForm
        validated = {this.state.validated}
        handleInputChange = {this.handleInputChange}
        handleInputSubmit = {this.handleInputSubmit}
        name={this.state.dish.name}
        description={this.state.dish.description}
        recipe={this.state.dish.recipe}
        image={this.state.dish.image}
        dish_ingredients={this.state.dish.dish_ingredients}
        />      
      );
    } else {
      console.log("redirecting");
      
      return <Redirect to={'/dishes/'+this.props.newDish.id} />
    }
  }
}

export default DishFormHOC;
