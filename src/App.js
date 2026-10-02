import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import configureStore from './store';

import Layout from "./components/layout";
import Routes from './routes';

const store = configureStore();
const queryClient = new QueryClient();

function App() {

  return (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Layout>
          <Routes/>
        </Layout>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
  );
}

export default App;
