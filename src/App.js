import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { DishesIndex } from "./components/dishes/index.jsx";
import { test_component_1 } from "./components/test_component_1.jsx";
import { test_component_2 } from "./components/test_component_2.jsx";

function App() {
  return (
  <BrowserRouter>
    <header>
                    <h1>Showing header</h1>
                </header>
          <Switch>
            <Route exact path="/" component={DishesIndex}/>
            <Route path="/1" component={test_component_1}/>
            <Route path="/2" component={test_component_2}/>
            <Route path="/22" component={test_component_1}/>
          </Switch>
        <footer>
                    <h1>Showing footer</h1>
                </footer>
  </BrowserRouter>
  );
}

export default App;
