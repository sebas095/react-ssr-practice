import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { LoadingContextProvider } from '../context/loading';
import { SearchItemContextProvider } from '../context/searchItem';

import Layout from './layout/layout';
import Router from '../router';

import constants from '../styles/constants';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: ${constants.background};
    color: ${constants.black};
    font-family: 'Nunito Sans', sans-serif;
  }
`;

const App = () => (
  <LoadingContextProvider>
    <SearchItemContextProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </SearchItemContextProvider>
  </LoadingContextProvider>
);

export default App;
