import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ROUTES from './routes';

const Router = () => {
  return (
    <Switch>
      {ROUTES.map(({ exact, path, component, key }) => {
        // if (path) {
        return (
          <Route component={component} path={path} exact={exact} key={key} />
        );
        // }
      })}
    </Switch>
  );
};

export default Router;
