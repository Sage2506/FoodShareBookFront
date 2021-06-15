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
import { UserFormHOC } from './components/users/form_hoc';
import PermissionsIndexHOC from './components/permissions/index_hoc';
import PermissionsFormHOC from './components/permissions/form_hoc';
import PermissionsShowHOC from './components/permissions/show_hoc';
import { connect } from 'react-redux';
//import { convertPermisionStringToList } from './lib/common';

export class Routes extends Component {
  render() {
    //const { current_user } = this.props
    //const { permissions } = current_user
    // let routes_list = []
    // if ( permissions.length !== 0){
    //   const locations_permissions = permissions.find( permission => permission.type_name === 'Locations')
    //   if( locations_permissions !== undefined){
    //     convertPermisionStringToList( locations_permissions )
    //     routes_list  = locations_permissions.list
    //   }
    // }
    // const routes = new Map ([
    //   [  1 , <Route exact path="/" component={DishesIndex}/>],
    //   [  2 , <Route path="/dishes/new" component={DishFormHOC}/>],
    //   [  3 , <Route path="/dishes/:id" component={DishShowHOC}/>],
    //   [  4 , <Route path="/ingredients/edit/:id" component={IngredientFormHOC}/>],
    //   [  5 , <Route path="/ingredients/new" component={IngredientFormHOC}/>],
    //   [  6 , <Route path="/ingredients/:id" component={IngredientShowHOC}/>],
    //   [  7 , <Route path="/ingredients/" component={IngredientsIndex}/>],
    //   [  8 , <Route path="/users" component={UsersIndexHOC} />],
    //   [  9 , <Route path="/roles/:id" component={RoleShowHOC } />],
    //   [ 10 , <Route path="/roles" component={RolesIndexHOC} />]
    // ])

    //<!--{ routes_list.map ( element => routes.get(element)  )}
    if(this.props.current_user.id === 1 ){
      return (
        <Switch>
            <Route exact path="/" component={DishesIndex}/>
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
