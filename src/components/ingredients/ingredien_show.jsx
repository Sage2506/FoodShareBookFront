import React, { Component } from 'react';
import { Image, ListGroup } from "react-bootstrap";
export class IngredientShow extends Component {
  render() {
    let {
      name, description, measures, image
    } = this.props
    return (
      <div>
        <h1>{name}</h1>
        <Image src={image === ""? "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg" : image } alt="Imagen no encontrada" thumbnail/>
        <h2>{description}</h2>
        <ListGroup>
          {measures.map( (measure, index) => 
            <ListGroup.Item key={measure.id} >
            <p>{measure.name}</p>
            </ListGroup.Item>)}
        </ListGroup>
      </div>
    );
  }
}

export default IngredientShow;
