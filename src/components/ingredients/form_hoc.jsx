import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postIngredient, putIngredient } from "../../services/ingredient_requests";
import IngredientForm from './form';
import { Redirect } from 'react-router-dom'
import { uploadImageToCloudinary } from '../../lib/common';
import { ingredientObject } from '../../models';
import { getIngredient } from "../../services/ingredient_requests";
export class IngredientFormHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredient: ingredientObject,
      validated: false,
      activeTab: 'solid',
      measureGroups: [
        { key: 'solid', label: 'Solid' },
        { key: 'liquid', label: 'Liquid' },
        { key: 'piece', label: 'Piece' }]
    };
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    if (this.props.location.pathname.split('/')[2] === 'edit') {
      this.props.getIngredient(id);
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.ingredient.id !== undefined && nextProps.ingredient.id !== prevState.ingredient.id) {
      const { measures } = nextProps.ingredient
      let activeTab = 'solid'
      if (measures.length > 0) {
        const { measuresCatalog } = nextProps
        activeTab = measuresCatalog.filter(measure => measures.includes(measure.id)).map(measure => measure.group)[0]
      }
      return { ...prevState, ingredient: nextProps.ingredient, activeTab };
    } else {
      return prevState
    }
  }

  onPreviewDrop = (acceptedFiles) => {
    const reader = new FileReader()
    reader.onloadend = ev => {
      this.setState({
        ingredient: {
          ...this.state.ingredient,
          image: reader.result
        }
      })
    }
    reader.readAsDataURL(acceptedFiles[0])
  }

  onImageSelected = (image) => {
    this.setState({
      ingredient: {
        ...this.state.ingredient,
        image
      }
    })
  }

  handleInputChange = e => {
    if (e.target.type === 'checkbox') {
      if (e.target.checked) {
        this.setState({
          ingredient: {
            ...this.state.ingredient,
            measures: [
              ...this.state.ingredient.measures,
              parseInt(e.target.value)
            ]
          }
        })
      } else {
        this.setState({
          ingredient: {
            ...this.state.ingredient,
            measures: this.state.ingredient.measures.filter(measure => measure !== parseInt(e.target.value))
          }
        })
      }
    } else {
      this.setState({
        ingredient: {
          ...this.state.ingredient,
          [e.target.id]: e.target.value
        }
      })
    }
  }

  handleInputSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget
    let { ingredient } = this.state
    let { name, description, image, measures } = ingredient
    if (form.checkValidity() === false || measures.length < 1 || name === "" || description === "") { //TODO: validate
      e.stopPropagation()
    } else {
      //checking if there's any image needed to be uploade
      if (false && image !== null && image.length > 0 && !image.includes(' ')) {
        //uploading image to cloudinary
        uploadImageToCloudinary(image, 'ingredients', (this.state.ingredient.id === undefined || this.state.ingredient.id === null) ? '' : ingredient.id).then(response => {
          const { version, public_id, format } = response.data
          let imageData = version + ' ' + public_id + ' ' + format
          ingredient = { ...ingredient, image: imageData }
          this.createOrUpdateIngredient(ingredient)
        }).catch(error => {
        })
      } else {
        this.createOrUpdateIngredient(ingredient)
      }
    }
    this.setState({
      validated: true,
    })
  }

  createOrUpdateIngredient = (ingredient) => {
    //check if going to create or update
    console.log(ingredient);
    if (this.state.ingredient.id === 0) {
      this.props.postIngredient(ingredient)
    } else {
      this.props.update_ingredient(this.state.ingredient.id, ingredient)
    }
  }

  groupDisabled = (group) => {
    const { measures } = this.state.ingredient
    if (measures.length > 0) {
      const { measuresCatalog } = this.props
      return !measuresCatalog.filter(measure => measures.includes(measure.id)).map(measure => measure.group).includes(group)
    } else {
      return false
    }

  }

  tabChange = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    if (this.props.newIngredient.id === undefined) {

      let { ingredient, validated, measureGroups, activeTab } = this.state
      let { name, description, image, measures } = ingredient
      let { measuresCatalog, history } = this.props
      return (
        <IngredientForm
          name={name}
          description={description}
          image={image}
          measures={measures}
          measuresCatalog={measuresCatalog}
          onPreviewDrop={this.onPreviewDrop}
          handleInputChange={this.handleInputChange}
          handleInputSubmit={this.handleInputSubmit}
          validated={validated}
          onImageSelected={this.onImageSelected}
          goBack={history.goBack}
          measureGroups={measureGroups}
          groupDisabled={this.groupDisabled}
          activeTab={activeTab}
          tabChange={this.tabChange}
        />
      );
    } else {
      return <Redirect to={'/ingredients/' + this.props.newIngredient.id} />
    }
  }
}

const mapStateToProps = (store) => ({
  newIngredient: store.ingredientReducer.newIngredient,
  measuresCatalog: store.measureReducer.measures,
  ingredient: store.ingredientReducer.ingredient,
});

const mapDispatchToProps = (dispatch) => ({
  postIngredient: (ingredient) => {
    dispatch(postIngredient(ingredient));
  },
  getIngredient: id => {
    dispatch(getIngredient(id))
  },
  update_ingredient: (id, data) => {
    dispatch(putIngredient({id, data}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientFormHOC);



