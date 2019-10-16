import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";


import configureStore from './store';

import Layout from "./components/layout";
import { PageNotFound } from "./components/page_not_found";
import DishesIndex from "./components/dishes";
import DishShowHOC from "./components/dishes/show_hoc";
import DishFormHOC from "./components/dishes/form_hoc";
import IngredientFormHOC from './components/ingredients/form_hoc'
import IngredientShowHOC from "./components/ingredients/show_hoc";
import IngredientsIndex from './components/ingredients';

const store = configureStore();

function App() {
  
  return (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
