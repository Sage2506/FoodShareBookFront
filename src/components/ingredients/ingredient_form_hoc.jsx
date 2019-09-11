import React, { Component } from 'react';
import IngredientForm from './ingredient_form';
import RootRef from '@material-ui/core/RootRef'

export class IngredientFormHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient : {
        name : "",
        description: "",
        image : "",
        measures : []
      },
      validated: false
    };
  }

  catchImage = acceptedFiles => {
    console.log(acceptedFiles);
    const reader = new FileReader()
    reader.onload = () => {
      // Do whatever you want with the file contents
      const binaryStr = reader.result
      console.log(binaryStr)
    }
    reader.readAsBinaryString(acceptedFiles[0])
    
  }

  handleInputChange = e => {
    if ( e.target.type === 'checkbox'){
      if(e.target.checked){
        this.setState({
          ingredient : {
            ...this.state.ingredient,
            measures:[
            ...this.state.ingredient.measures,
            parseInt(e.target.value)
          ]}
        })
      } else {
        this.setState({
          ingredient: {
            ...this.state.ingredient,
            measures: this.state.ingredient.measures.filter( measure => measure !== parseInt(e.target.value))
          }
        })
      }
    } else {
      this.setState({
        ingredient: {
          ...this.state.ingredient,
          [e.target.id] : e.target.value
        }
      })
    }
  }

  handleInputSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget
    if(form.checkValidity() === false || this.state.ingredient.measures.length < 1){
      e.stopPropagation()
      this.setState({
        validated: false,
      })
    } else {
      this.props.create_ingredient(this.state.ingredient)
    }
  }




  render() {
    let { ingredient, validated } = this.state
    let { name, description, image, measures} = ingredient
    let { measuresCatalog } = this.props
    
    return (
      <IngredientForm
        name={name}
        description={description}
        image={image}
        measures={measures}
        measuresCatalog={measuresCatalog}
        catchImage = {this.catchImage}
        handleInputChange={this.handleInputChange}
        handleInputSubmit={this.handleInputSubmit}
        validated={validated}
      />
    );
  }
}

export default IngredientFormHOC;


