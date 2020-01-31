/* eslint-disable react/display-name */
import React from 'react';
import { Route } from 'react-router-dom';

import Main, { MainConfig } from 'layouts/Main';

const createRoutesFromConfig = config => {
  const routes = [];

  config.forEach(route => {
    const { component: Component, settings, ...rest } = route;

    const layoutConfig = { ...settings };

    routes.push(
      <Route
        {...rest}
        render={props => (
          <Main config={MainConfig}>
            <Component {...props} />
          </Main>
        )}
      />
    );
  });

  return routes;
};

export default createRoutesFromConfig;
