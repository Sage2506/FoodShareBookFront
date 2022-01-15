import React, { Component } from 'react';
import { DishForm } from "./form";
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { post_dish, get_dish } from '../../services/dish_requests';
import { uploadImageToCloudinary } from '../../lib/common';
import { dishObject, ingredientObject } from '../../models';
import { IDish } from '../../interfaces/dishes';
import { IIngredients } from '../../interfaces/ingredients';

export class DishFormHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dish: dishObject,
      new_ingredient: ingredientObject,
      valid_measures: [],
      validated : false,
      setValidated : false
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    if ( id !== undefined ) {
      this.props.fetch_dish(id);
    }
  }

  /* static getDerivedStateFromProps(nextProps, prevState) {
    if ( !!nextProps.dish && nextProps.dish.id !== undefined && nextProps.dish.id !== prevState.dish.id ) {
      return {...prevState, dish: nextProps.dish};
    } else {
      return prevState
    }
  } */

  componentDidUpdate(prevProps, prevState) {
    if( !prevProps.dish && this.props.dish ){
      this.setState({ dish: this.props.dish})
    }
  }


  onImageSelected = (image) => {
    this.setState({
      dish: {
        ...this.state.dish,
        image
      }
    })
  }

  ingredient_selected = (ingredient) => {
    this.setState({
      new_ingredient: {
        ...this.state.new_ingredient,
        ingredient_id: ingredient.id,
        ingredient_name: ingredient.name
      },
      valid_measures: this.props.measures.filter( (measure) => ingredient.measures.includes(measure.id))
    })
  }

  addNewIngredient = () => {
    this.setState({
      dish: {
        ...this.state.dish,
        dish_ingredients: [...this.state.dish.dish_ingredients, this.state.new_ingredient]
      },
      new_ingredient : {
        ingredient_id: -1,
        ingredient_name: "",
        ingredient_image: "",
        quantity: '',
        measure_id: 0,
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
        quantity: e.target.value === '' ? '' : parseFloat(e.target.value)
      }
    });
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
        image: null,
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
  }

  handleInputSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget
    let { dish } = this.state
    let { name, recipe, dish_ingredients, image} = dish
    //verifying if fields complete
    if(
      form.checkValidity() === false
      || dish_ingredients.length < 2
      || name === ""
      || recipe === ""
      // || image === null // TODO: re enable this if you want to force image
      ){
      e.stopPropagation()
      this.setState({
        validated: false,
        setValidated: false
      })
    } else {
      //this.uploadFile(image)

      //this.props.create_dish(this.state.dish)
      if( image !== null && !image.includes(' ')){
        uploadImageToCloudinary(image, 'dishes', (this.state.dish.id === undefined || this.state.dish.id === null)? '': dish.id).then( response => {
          const {version, public_id, format} = response.data
          let imageData = version + ' ' + public_id + ' ' + format
          dish = {...dish, image: imageData}
          this.createOrUpdateDish(dish)
        }).catch ( error => {
        })
      } else {
        this.createOrUpdateDish(dish)
      }
    }
  }

  uploadFile = (image) => {
    let url = `https://api.cloudinary.com/v1_1/dbo96sjb/upload`;
    let xhr = new XMLHttpRequest();
    let fd = new FormData();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = (e) => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        let imageData = response.version + ' ' + response.public_id + ' ' + response.format
        //if( this.state.dish.id === undefined || this.state.dish.id === null ) {
        this.props.create_dish({...this.state.dish, image : imageData})
        //} else {
          //this.props.
        //}
        this.handleReset();
      }
    };

    fd.append("tags", "browser_upload");
    fd.append("upload_preset", "rfsb_images")
    fd.append("api_key", "757447362712211");
    fd.append("api_secret", "z_F0g_ccUUJG24DDJJjyNdjl0RM");
    fd.append("folder","dishes");
    fd.append("file", image);
    xhr.send(fd);
  }

  createOrUpdateDish = (dish) => {
    this.props.create_dish(dish)
  }


  render() {
    if(!this.props.newDish ||  this.props.newDish.id === undefined ){

      let {validated, new_ingredient, dish, valid_measures } = this.state
      let {recipe, image, name, description, dish_ingredients} = dish
      return (
        <DishForm
          handleInputChange = {this.handleInputChange}
          handleSelectChange = {this.handleSelectChange}
          handleInputQuantityChange = {this.handleInputQuantityChange}
          onKeyDown = {this.onKeyDown}
          addNewIngredient = {this.addNewIngredient}
          selected_item = {this.ingredient_selected}
          handleInputSubmit = {this.handleInputSubmit}
          validated = {validated}
          measures = {valid_measures}
          new_ingredient={new_ingredient}
          name={name}
          description={description}
          recipe={recipe}
          image={image}
          dish_ingredients={dish_ingredients}
          onImageSelected={this.onImageSelected}
        />
      );
    } else {
      return <Redirect to={'/dishes/'+this.props.newDish.id} />
    }
  }
}

const mapStateToProps = store => {
  return {
      dish: store.dishReducer.dish,
      newDish: store.dishReducer.newDish,
      measures: store.measureReducer.measures
  }
}

const mapDispatchToProps = dispatch => {
  return {
      create_dish: dish =>{
          dispatch(post_dish(dish))
      },
      fetch_dish: id => {
          dispatch(get_dish(id))
      }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DishFormHOC)
