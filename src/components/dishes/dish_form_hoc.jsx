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
      new_ingredient: {
        ingredient_id: -1,
        ingredient_name: "",
        ingredient_image: "",
        quantity: '',
        measure_id: -1,
      },
      valid_measures: [],
      validated : false,
      setValidated : false
    };
  }

  ingredient_selected = ingredient => {

    this.setState({
      new_ingredient: {
        ...this.state.new_ingredient,
        ingredient_id: ingredient.id,
        ingredient_name: ingredient.name
      },      
      valid_measures: this.props.measures.filter( measure => ingredient.measures.includes(measure.id))
    })
  }
  addNewIngredient = () => {
    this.setState({
      dish: {
        ...this.state.dish,
        dish_ingredients: [...this.state.dish.dish_ingredients, this.state.new_ingredient]
      }
    })
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

  handleInputQuantityChange = e => {
    this.setState({
      new_ingredient: {
        ...this.state.new_ingredient,
        quantity: parseFloat(e.target.value)
      }
    })
  }

  handleSelectChange = e => {
    this.setState({
      new_ingredient: {
        ...this.state.new_ingredient,
        measure_id: parseInt(e.target.value)
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

  onKeyDown = (event) => {
    if (event.keyCode === 13) { 
      event.preventDefault() 
    }
  };

  onNumericInputKeyDown = e => {
    console.log(e.keyCode);
    console.log("rememble to handle 'e'")
  }

  handleInputSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget
    if(form.checkValidity() === false || this.state.dish.dish_ingredients.length < 2){
      e.stopPropagation()
      this.setState({
        validated: false,
        setValidated: false
      })
    } else {
      this.props.create_dish(this.state.dish)
      this.handleReset();
    }
  }
  render() {
    if(this.props.newDish.id === undefined ){
      return (
        <DishForm
          handleInputChange = {this.handleInputChange}
          handleSelectChange = {this.handleSelectChange}
          handleInputQuantityChange = {this.handleInputQuantityChange}
          onKeyDown = {this.onKeyDown}
          addNewIngredient = {this.addNewIngredient}
          selected_item = {this.ingredient_selected}
          handleInputSubmit = {this.handleInputSubmit}
          validated = {this.state.validated}
          measures = {this.state.valid_measures}
          new_ingredient={this.state.new_ingredient}
          name={this.state.dish.name}
          description={this.state.dish.description}
          recipe={this.state.dish.recipe}
          image={this.state.dish.image}
          dish_ingredients={this.state.dish.dish_ingredients}
        />
      );
    } else {
      return <Redirect to={'/dishes/'+this.props.newDish.id} />
    }
  }
}

export default DishFormHOC;
