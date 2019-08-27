import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";


import configureStore from './store';

import { Layout } from "./components/Layout";
import { PageNotFound } from "./components/PageNotFound";
import { default as DishesIndex } from "./containers/dish/dish_index_container";
import {default as DishShow } from "./containers/dish/dish_show_container"
import { default as DishForm } from "./containers/dish/dish_form_container";

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
              <Route path="*" component={PageNotFound}/>
            </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
