import React, { Component } from 'react';
import { IngredientTable } from './ingredient_table';
import { FloatingActionButtonPlus } from '../common/floating_action_button';
import { default as Pagination } from '../common/pagination';
export class IngredientsIndex extends Component {
  componentDidMount() {
    let { getIngredients, pagination  } = this.props;
    getIngredients(pagination.currentPage);
  }
  render() {
    let {ingredients, getIngredients, pagination } = this.props;
    return (
      <div>
      <IngredientTable
        ingredients = {ingredients}
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

export default IngredientsIndex;