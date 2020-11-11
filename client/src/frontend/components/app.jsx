import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import { LoadingContextProvider } from '../context/loading';
import { SearchItemContextProvider } from '../context/searchItem';

import Layout from './layout/layout';
import Router from '../router';

import constants from '../styles/constants';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${constants.background};
    color: ${constants.black};
    font-family: 'Nunito Sans', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${constants.gray};

    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
  }

  span[role='img'] {
    margin-right: 0.25em;
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
