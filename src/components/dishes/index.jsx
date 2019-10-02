import React, { Component } from 'react';
import { default as Pagination } from '../common/pagination';
import { DishTable } from './dish_table';
import { FloatingActionButtonPlus } from '../common/floating_action_button';


export class DishesIndex extends Component {

  componentDidMount() {
    let { getDishes, pagination  } = this.props;
    getDishes(pagination.currentPage);
  }

  render() {
    let { pagination , getDishes, dishes } = this.props;

    return (
      <div>
      <DishTable
        dishes = {dishes}
        per_page = {pagination.pageSize}
      />
      <Pagination
        pagination={pagination}
        paginationRequest={getDishes}
      />
      <FloatingActionButtonPlus
        link = '/dishes/new'
      />
      </div>
    );
  }
}

export default DishesIndex;