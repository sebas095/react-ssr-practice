import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { LoadingContextProvider } from '../context/loading';
import { SearchItemContextProvider } from '../context/searchItem';

import Layout from './layout/layout';
import Router from '../router';

const App = () => (
  <LoadingContextProvider>
    <SearchItemContextProvider>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </SearchItemContextProvider>
  </LoadingContextProvider>
);

export default App;
