import React, { Component } from 'react';
import { IngredientShow } from "./ingredien_show";
import { buildImageSecureUrl } from "../lib/common";
export class IngredientShowHOC extends Component {
  componentDidMount() {
    this.props.getIngredient(this.props.match.params.id)
  }
  
  render() {
    let { name , description, measures, image, id } = this.props.ingredient;
    let { measuresCatalog, history } = this.props
    return (
      <IngredientShow
        id = { id }
        name = { name }
        description = { description }
        measures = { measures !== undefined ? measuresCatalog.filter( measure => measures.includes(measure.id)) : [] }
        image = { buildImageSecureUrl(image) }
        goBack = {history.goBack}
      />
    );
  }
}

export default IngredientShowHOC;
