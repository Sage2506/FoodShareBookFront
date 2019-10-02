import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { LinkContainer } from "react-router-bootstrap";
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from "react-bootstrap";
import { default as DishTableRow } from "./dish_table_row_hoc";
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
    <LinkContainer to={'/dishes/new'}>
      <Fab color='primary' aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
    </LinkContainer>
  )
}

export class DishesIndex extends Component {
  componentDidMount() {
      this.props.getDishes();
  }
  render() {
    console.log(this.props.pagination);
    
    let { pages, arrows, currentPage } = this.props.pagination;
    console.log(arrows);
    
    let { prev, next, first, last, } = arrows;
    return (
      <div>
      <Table>
         <thead>
          <tr>
            <th>id</th>
            <th>Platillo</th>
            <th>Descripcion</th>
            <th>Numero de ingredientes</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        { this.props.dishes.map( (dish, position) => 
        <DishTableRow dish = {dish} position = {position} key = {dish.id}/>
          )}
        </tbody>
      </Table>
      <Pagination size="lg">
        { first  && 
          <Pagination.Item>
            {first}
          </Pagination.Item>
        }
        { prev && 
          <Pagination.Item>
            {prev}
          </Pagination.Item>
        }
        {pages.map( page => 
          <Pagination.Item>
            {page}
          </Pagination.Item>
        )}
        { next && 
          <Pagination.Item>
            {next}
          </Pagination.Item>
        }
        { last && 
          <Pagination.Item>
            {last}
          </Pagination.Item>
        }
      </Pagination>
      <FloatingActionButtonPlus/>
      </div>
    );
  }
}

export default DishesIndex;