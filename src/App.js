import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";


import configureStore from './store';
import { get_dishes } from "./services/dish_calls";
import { Layout } from "./components/Layout";
import { PageNotFound } from "./components/PageNotFound";
import { default as DishesIndex } from "./containers/dish_index_container";
//import { default as DishShow } from "./components/dishes/dish_show_hoc";
import {default as DishShow } from "./containers/dish/dish_show_container"

const store = configureStore()
store.dispatch(get_dishes());

function App() {
  
  return (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
            <Switch>
              <Route exact path="/" component={DishesIndex}/>          
              <Route exact path="/dishes" component={DishesIndex}/>
              <Route path="/dishes/:id" component={DishShow}/>
              <Route path="*" component={PageNotFound}/>
            </Switch>
      </Layout>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
