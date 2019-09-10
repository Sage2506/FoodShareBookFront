import React, { Component } from 'react';
import IngredientForm from './ingredient_form';
import { thisExpression } from '@babel/types';

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

  showWidget = () => {
    let widget = window.cloudinary.createUploadWidget({
      cloudName: 'dbo96sjb',
      apiKey: '757447362712211',
      uploadPreset: 'rfsb_images',
      preBatch: (cb, data) => {
        cb({
          cancel: true
        })
        console.log(data.files[0]);
        
      }
    }, (error, result) => { this.checkUploadResult(result)})
    
    widget.open();
  }

  checkUploadResult = result => {
    if (result.event === 'success'){
      console.log(result.info.secure_url);
      console.log(result.info)
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
        showCloudinaryWidget={this.showWidget}
        handleInputChange={this.handleInputChange}
        handleInputSubmit={this.handleInputSubmit}
        validated={validated}
      />
    );
  }
}

export default IngredientFormHOC;


