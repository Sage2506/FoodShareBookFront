import React, { Component } from 'react';
import { IngredientShow } from "./ingredien_show";
export class IngredientShowHOC extends Component {
  componentDidMount() {
    this.props.getIngredient(this.props.match.params.id)
  }
  
  buildImageSecureUrl = (image) => {
    if ( image === undefined || image ===""){
      return ''
    } else {
      let imageData = image.split(' ');
      const imageSecureUrl = `https://res.cloudinary.com/dbo96sjb/image/upload/v${imageData[0]}/${imageData[1]}.${imageData[2]}`;
      return imageSecureUrl;
    }
  }
  
  render() {
    let { name , description, measures, image } = this.props.ingredient;
    let { measuresCatalog } = this.props
    return (
      <IngredientShow
        name = { name }
        description = { description }
        measures = { measures !== undefined ? measuresCatalog.filter( measure => measures.includes(measure.id)) : [] }
        image = { this.buildImageSecureUrl(image) }
      />
    );
  }
}

export default IngredientShowHOC;
