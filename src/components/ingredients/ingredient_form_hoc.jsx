import React, { Component } from 'react';
import IngredientForm from './ingredient_form';
import { Redirect } from 'react-router-dom'

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
      this.uploadFile(image);
      /*let url = `https://api.cloudinary.com/v1_1/dbo96sjb/upload`;
      let fd = new FormData();
      fd.append("tags", "browser_upload");
      fd.append("upload_preset", "rfsb_images")
      fd.append("api_key", "757447362712211");
      fd.append("api_secret", "z_F0g_ccUUJG24DDJJjyNdjl0RM");
      //fd.append("return_delete_token", true);
      fd.append("folder","ingredients");
      fd.append("file", image);
      axios.post(url, fd)
        .then( res => {
          let imageData = res.data.version + ' ' + res.data.public_id + ' ' + res.data.format
          this.props.create_ingredient({...this.state.ingredient, image : imageData})
        })
        .catch(function (err) {
          console.error('err', err);
        });*/
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
        this.props.create_ingredient({...this.state.ingredient, image : imageData})
      }
    };

    fd.append("tags", "browser_upload");
    fd.append("upload_preset", "rfsb_images")
    fd.append("api_key", "757447362712211");
    fd.append("api_secret", "z_F0g_ccUUJG24DDJJjyNdjl0RM");
    fd.append("folder","ingredients");
    fd.append("file", image);
    xhr.send(fd);
  }

  render() {
    if ( this.props.newIngredient.id === undefined ) {

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
        onPreviewDrop = {this.onPreviewDrop}
        handleInputChange={this.handleInputChange}
        handleInputSubmit={this.handleInputSubmit}
        validated={validated}
        onImageSelected={this.onImageSelected}
        />
        );
    } else {
      return <Redirect to={'/ingredients/'+this.props.newIngredient.id} />
    }
  }
}

export default IngredientFormHOC;


