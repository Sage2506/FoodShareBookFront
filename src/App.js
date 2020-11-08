import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";


import configureStore from './store';

import Layout from "./components/layout";
import Routes from './routes';

const store = configureStore();

function App() {

  return (
  <Provider store={store}>
    <BrowserRouter>
      <Layout>
        <Routes/>
      </Layout>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
