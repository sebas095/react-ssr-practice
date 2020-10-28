import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './layout/layout';
import Router from '../router';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Router />
    </Layout>
  </BrowserRouter>
);

export default App;
