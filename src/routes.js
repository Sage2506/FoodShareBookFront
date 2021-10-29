import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

import { PageNotFound } from "./components/page_not_found";
import DishesIndex from "./components/dishes";
import DishFormHOC from "./components/dishes/form_hoc";
import DishShowHOC from "./components/dishes/show_hoc";
import IngredientFormHOC from './components/ingredients/form_hoc'
import IngredientShowHOC from "./components/ingredients/show_hoc";
import IngredientsIndex from './components/ingredients';
import RoleShowHOC from './components/roles/show_hoc';
import RolesIndexHOC from './components/roles/index_hoc';
import UsersIndexHOC from './components/users/index_hoc';
import UserFormHOC from './components/users/form_hoc';
import PermissionsIndexHOC from './components/permissions/index_hoc';
import PermissionsFormHOC from './components/permissions/form_hoc';
import PermissionsShowHOC from './components/permissions/show_hoc';
import { connect } from 'react-redux';
//import { convertPermisionStringToList } from './lib/common';

export class Routes extends Component {
  render() {
    if(this.props.current_user.id === 1 ){
      return (
        <Switch>
            <Route exact path="/" component={DishesIndex}/>
            <Route path="/dishes/edit/:id" component={DishFormHOC}/>
            <Route path="/dishes/new" component={DishFormHOC}/>
            <Route path="/dishes/:id" component={DishShowHOC}/>
            <Route path="/ingredients/edit/:id" component={IngredientFormHOC}/>
            <Route path="/ingredients/new" component={IngredientFormHOC}/>
            <Route path="/ingredients/:id" component={IngredientShowHOC}/>
            <Route path="/ingredients/" component={IngredientsIndex}/>
            <Route path="/users/edit/:id" component={UserFormHOC} />
            <Route path="/users" component={UsersIndexHOC} />
            <Route path="/roles/:id" component={RoleShowHOC } />
            <Route path="/roles" component={RolesIndexHOC} />
            <Route path="/permissions/edit/:id" component={PermissionsFormHOC} />
            <Route path="/permissions/new" component={PermissionsFormHOC} />
            <Route path="/permissions/:id" component={PermissionsShowHOC} />
            <Route path="/permissions" component={PermissionsIndexHOC} />
            <Route path="*" component={PageNotFound}/>
        </Switch>
      );
    } else {
      return (
        <Switch>
            <Route exact path="/" component={DishesIndex}/>
            <Route path="/dishes/edit/:id" component={DishFormHOC}/>
            <Route path="/dishes/new" component={DishFormHOC}/>
            <Route path="/dishes/:id" component={DishShowHOC}/>
            <Route path="/ingredients/edit/:id" component={IngredientFormHOC}/>
            <Route path="/ingredients/new" component={IngredientFormHOC}/>
            <Route path="/ingredients/:id" component={IngredientShowHOC}/>
            <Route path="/ingredients/" component={IngredientsIndex}/>
            <Route path="*" component={PageNotFound}/>
        </Switch>
      );
    }

  }
}

const mapStateToProps = (store) => ({
  current_user: store.userReducer.current_user
})

export default connect(mapStateToProps, null)(Routes);
