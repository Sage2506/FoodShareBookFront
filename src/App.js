import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Layout } from "./components/Layout";
import { PageNotFound } from "./components/PageNotFound";
import 'bootstrap/dist/css/bootstrap.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DishesIndex } from "./components/dishes/index.jsx";
import { test_component_1 } from "./components/test_component_1";
import { test_component_2 } from "./components/test_component_2";
import { DishForm } from "./components/dishes/dish_form";

function App() {
  return (
  <BrowserRouter>
    <Layout>
          <Switch>
            <Route exact path="/" component={DishesIndex}/>          
            <Route path="/dishes" component={DishesIndex}/>
            <Route path="/dishes/:id" component={DishForm}/>
            <Route path="/1" component={test_component_1}/>
            <Route path="/2" component={test_component_2}/>
            <Route path="*" component={PageNotFound}/>
          </Switch>
    </Layout>
  </BrowserRouter>
  );
}

export default App;
