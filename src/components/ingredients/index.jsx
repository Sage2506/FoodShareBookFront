import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_ingredients, destroy_ingredient } from "../../services/ingredient_requests";
import { IngredientTable } from './table';
import { FloatingActionButtonPlus } from '../common/floating_action_button';
import { default as Pagination } from '../common/pagination';
import { IPagination } from '../../interfaces/common';
import { IIngredients } from '../../interfaces/ingredients';
import { getCurrentUserPermissionByType } from '../../services/permissions_type_requests';
import { mapPermissions } from '../lib/common';
import { updatePermissions } from '../../lib/common';
import { getIngredients } from '../../actions/ingredient';
import { getAndSendAction } from '../../services/common_requests';

export class IngredientsIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      permissions: {}
    }
  }
  componentDidMount() {
    let { getIngredients, pagination, currentUser } = this.props;
    getIngredients(pagination.currentPage);
    this.props.getCurrentUserPermissionsByType();
  }

  componentDidUpdate(prevProps , prevState , snapshot){
    const { permissions: prevPermissions} = prevProps.currentUser
    const {permissions : newPermissions} = this.props.currentUser
    //update when they have different sizes
    //update when both have something and first's id's are diff
    if ( prevPermissions.length !== newPermissions.length || (prevPermissions.length !== 0 && prevPermissions[0].id !== newPermissions[0].id) ){
      updatePermissions(this)
    }

  }

  render() {
    let { ingredients, getIngredients, pagination, deleteIngredient, currentUser } = this.props;
    const {permissions} = this.state
    let { pageSize } = pagination
    return (
      <div>
        <IngredientTable
          permissions ={permissions}
          ingredients={ingredients}
          per_page={pageSize}
          deleteIngredient={deleteIngredient}
          currentUserId = {currentUser.id}
          currentUserRoleId = {currentUser.role_id}
        />
        <Pagination
          pagination={pagination}
          paginationRequest={getIngredients}
        />
        { permissions.create && <FloatingActionButtonPlus
          link='/ingredients/new'
        />}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  ingredients: store.ingredientReducer.ingredients,
  pagination: store.ingredientReducer.pagination,
  currentUser : store.userReducer.current_user
});

const mapDispatchToProps = (dispatch) => ({
  getIngredients: (params) =>{
    dispatch( getAndSendAction ({
        path:"ingredients", 
        action: getIngredients , 
        params : { page : 1, per_page : 10, ...params} 
      }))
  },
  deleteIngredient: (id) => {
    dispatch(destroy_ingredient(id));
  },
  getCurrentUserPermissionsByType: () => {
    dispatch(getCurrentUserPermissionByType(2))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(IngredientsIndex);