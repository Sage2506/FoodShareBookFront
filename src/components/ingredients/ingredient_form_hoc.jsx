import React, { Component } from 'react';
import IngredientForm from './ingredient_form';
import axios from "axios";
import cloudinary from 'cloudinary-core'; 

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
  }

  onPreviewDrop = acceptedFiles => {
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
    let { ingredient } = this.state
    let { name , description, image, measures } = ingredient
    if(form.checkValidity() === false || measures.length < 1 || image === null || name === "" || description === "" ){
      e.stopPropagation()
      this.setState({
        validated: false,
      })

    } else {
      //let cl = new cloudinary.Cloudinary({cloud_name: "demo", secure: true});

      let url = `https://api.cloudinary.com/v1_1/dbo96sjb/upload`;
      let fd = new FormData();
      // fd.append("upload_preset", unsignedUploadPreset);
      fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
      fd.append("upload_preset", "demo preset")
      fd.append("api_key", "757447362712211");
      fd.append("api_secret", "z_F0g_ccUUJG24DDJJjyNdjl0RM");
      fd.append("file", image);
      const config = {}
      axios.post(url, fd, config)
              .then(function (res) {
                console.log(res);
                this.props.create_ingredient(this.state.ingredient)
              })
              .catch(function (err) {
                console.error('err', err);
              });




    }
  }

  /*function uploadFile(file) {
    var url = `https://api.cloudinary.com/v1_1/dbo96sjb/upload`;
    var fd = new FormData();
    // fd.append("upload_preset", unsignedUploadPreset);
    fd.append("tags", "browser_upload"); // Optional - add tag for image admin in Cloudinary
    fd.append("api_key", "757447362712211");
    fp.append("api_secret", "z_F0g_ccUUJG24DDJJjyNdjl0RM");
    fd.append("file", file);
    const config = {}
      /*headers: { "X-Requested-With": "XMLHttpRequest" },
      onUploadProgress: function(progressEvent) {
        // Do whatever you want with the native progress event
        // console.log('progressEvent', progressEvent);
        var progress = Math.round((progressEvent.loaded * 100.0) / progressEvent.total);
        document.getElementById('progress').style.width = progress + "%";
  
        console.log(`onUploadProgress progressEvent.loaded: ${progressEvent.loaded},
      progressEvent.total: ${progressEvent.total}`);
      }
    };
    axios.post(url, fd, config)
              .then(function (res) {
                // console.log('res', res)
                // File uploaded successfully
                /*var response = res.data;
                // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
                var url = response.secure_url;
                // Create a thumbnail of the uploaded image, with 150px width
                var tokens = url.split('/');
                tokens.splice(-2, 0, 'w_150,c_scale');
                var img = new Image(); // HTML5 Constructor
                img.src = tokens.join('/');
                img.alt = response.public_id;
                document.getElementById('gallery').appendChild(img);
              })
              .catch(function (err) {
                console.error('err', err);
              });
  
    // Reset the upload progress bar
    document.getElementById("progress").style.width = 0;
  }*/




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
        onPreviewDrop = {this.onPreviewDrop}
        handleInputChange={this.handleInputChange}
        handleInputSubmit={this.handleInputSubmit}
        validated={validated}
      />
    );
  }
}

export default IngredientFormHOC;


