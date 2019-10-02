import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";


import configureStore from './store';

import { default as Layout } from "./containers/layout_container";
import { PageNotFound } from "./components/PageNotFound";
import { default as DishesIndex } from "./containers/dish/dish_index_container";
import {default as DishShow } from "./containers/dish/dish_show_container"
import { default as DishForm } from "./containers/dish/dish_form_container";
import {default as IngredientForm} from './containers/ingredient/ingredient_form_container'
import { default as IngredientShow } from "./containers/ingredient/ingredient_show_container";
import {default as IngredientsIndex} from './containers/ingredient/ingredient_index_container';

const store = configureStore();

function App() {
  
  return (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={DishesIndex}/>          
          <Route path="/dishes/new" component={DishForm}/>
          <Route path="/dishes/:id" component={DishShow}/>
          <Route path="/ingredients/new" component={IngredientForm}/>
          <Route path="/ingredients/:id" component={IngredientShow}/>
          <Route path="/ingredients/" component={IngredientsIndex}/>
          <Route path="*" component={PageNotFound}/>
        </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
