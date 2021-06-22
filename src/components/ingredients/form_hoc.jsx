import React, { Component } from 'react';
import { connect } from 'react-redux';
import { post_ingredient, get_ingredient, put_ingredient } from "../../services/ingredient_requests";
import IngredientForm from './form';
import { Redirect } from 'react-router-dom'
import { uploadImageToCloudinary } from '../../lib/common';

export class IngredientFormHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient : {
        name : "",
        description: "",
        image : null,
        measures : []
      },
      validated: false
    };
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    if ( this.props.location.pathname.split('/')[2] === 'edit'){
      this.props.getIngredient(id);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if ( nextProps.ingredient.id !== undefined && nextProps.ingredient.id !== prevState.ingredient.id ) {
      return {...prevState, ingredient: nextProps.ingredient};
    } else {
      return prevState
    }
  }

  onPreviewDrop = (acceptedFiles) => {
    const reader = new FileReader()
    reader.onloadend = ev => {
      this.setState({
        ingredient : {
          ...this.state.ingredient,
          image : reader.result
        }
      })
    }
    reader.readAsDataURL(acceptedFiles[0])
  }

  onImageSelected = (image) => {
    this.setState({
      ingredient : {
        ...this.state.ingredient,
        image
      }
    })
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

  handleInputSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget
    let { ingredient } = this.state
    let { name , description, image, measures } = ingredient
    if(form.checkValidity() === false || measures.length < 1 || image === null || name === "" || description === "" ){
      e.stopPropagation()
      this.setState({
        validated: false,
      })
    } else {
      //checking if there's any image needed to be uploade
      if( image !== null && !image.includes(' ')){
        //uploading image to cloudinary
        uploadImageToCloudinary(image, 'ingredients', (this.state.ingredient.id === undefined || this.state.ingredient.id === null)? '': ingredient.id).then( response => {
          const {version, public_id, format} = response.data
          let imageData = version + ' ' + public_id + ' ' + format
          ingredient = {...ingredient, image: imageData}
          this.createOrUpdateIngredient(ingredient)
        }).catch ( error => {
        })
      } else {
        this.createOrUpdateIngredient(ingredient)
      }
    }
  }

  createOrUpdateIngredient = (ingredient) => {
    //check if going to create or update
    if( this.state.ingredient.id === undefined || this.state.ingredient.id === null){
      this.props.create_ingredient(ingredient)
    } else {
      this.props.update_ingredient(this.state.ingredient.id, ingredient)
    }
  }

  render() {
    if ( this.props.newIngredient.id === undefined ) {

      let { ingredient, validated } = this.state
      let { name, description, image, measures} = ingredient
      let { measuresCatalog, history } = this.props

      return (
        <IngredientForm
        name={name}
        description={description}
        image={image}
        measures={measures}
        measuresCatalog={measuresCatalog}
        onPreviewDrop = {this.onPreviewDrop}
        handleInputChange={this.handleInputChange}
        handleInputSubmit={this.handleInputSubmit}
        validated={validated}
        onImageSelected={this.onImageSelected}
        goBack={history.goBack}
        />
        );
    } else {
      return <Redirect to={'/ingredients/'+this.props.newIngredient.id} />
    }
  }
}

const mapStateToProps = (store) => ({
  newIngredient: store.ingredientReducer.newIngredient,
  measuresCatalog: store.measureReducer.measures,
  ingredient: store.ingredientReducer.ingredient,
});

const mapDispatchToProps = (dispatch) => ({
  create_ingredient: (ingredient) => {
    dispatch(post_ingredient(ingredient));
  },
  getIngredient: (id) => {
    dispatch(get_ingredient(id));
  },
  update_ingredient: (id, ingredient) =>{
    dispatch(put_ingredient(id, ingredient));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientFormHOC);



