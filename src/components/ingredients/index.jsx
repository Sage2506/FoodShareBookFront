import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { LinkContainer } from "react-router-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import { default as IngredientTableRow } from "./ingredient_table_row_hoc";
import {  Table} from "react-bootstrap";

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
    backgroundColor: '#007bff',
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  }
}));

const FloatingActionButtonPlus = () => {
  const classes = useStyles();
  return (
    <LinkContainer to={'/ingredients/new'}>
      <Fab color='primary' aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </LinkContainer>
  )
}

export class IngredientsIndex extends Component {
  componentDidMount() {
      this.props.getIngredients();
  }
  render() {        
    return (
      <div>
      <Table>
         <thead>
          <tr>
            <th>id</th>
            <th>Ingrediente</th>
            <th>Descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        { this.props.ingredients.map( (ingredient, position) => 
        <IngredientTableRow ingredient = {ingredient} position = {position} key = {ingredient.id}/>
          )}
        </tbody>
      </Table>
      <FloatingActionButtonPlus/>
      </div>
    );
  }
}

export default IngredientsIndex;