import React, { Component } from 'react';
import { Image, ListGroup, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export class IngredientShow extends Component {
  render() {
    let {
      id, name, description, measures, image, goBack
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
        <LinkContainer to={'/ingredients/edit/'+id}><Button variant="info" title="Editar"><i className="far fa-edit"></i></Button></LinkContainer>
        <Button title="Atrás" onClick={goBack} ><i className="fas fa-long-arrow-alt-left"></i></Button>
      </div>
    );
  }
}

export default IngredientShow;
