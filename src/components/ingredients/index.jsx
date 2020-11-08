import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_ingredients, destroy_ingredient } from "../../services/ingredient_requests";
import { IngredientTable } from './table';
import { FloatingActionButtonPlus } from '../common/floating_action_button';
import { default as Pagination } from '../common/pagination';
export class IngredientsIndex extends Component {
  componentDidMount() {
    let { getIngredients, pagination  } = this.props;
    getIngredients(pagination.currentPage);
  }

  render() {
    let {ingredients, getIngredients, pagination, deleteIngredient } = this.props;
    let { pageSize } = pagination    
    return (
      <div>
      <IngredientTable
        ingredients = {ingredients}
        per_page = {pageSize}
        deleteIngredient = {deleteIngredient}
      />
      <Pagination 
        pagination={pagination}
        paginationRequest={getIngredients}
      />
      <FloatingActionButtonPlus
        link= '/ingredients/new'
      />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  ingredients: store.ingredientReducer.ingredients,
  pagination: store.ingredientReducer.pagination
});

const mapDispatchToProps = (dispatch) => ({
  getIngredients: (page = 1, per_page = 10) => {
    dispatch(get_ingredients(page, per_page));
  },
  deleteIngredient: (id) => {
    dispatch(destroy_ingredient(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsIndex);