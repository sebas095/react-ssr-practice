/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */

import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import webpack from 'webpack';
import favicon from 'serve-favicon';
import path from 'path';

import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { ServerStyleSheet } from 'styled-components';

import Layout from '../frontend/components/layout/layout';
import ROUTES from '../frontend/router/routes';
import getManifest from './getManifest';

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Yeah! You are in Development Mode. 🚀');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler, serverConfig));
} else {
  app.use((req, res, next) => {
    if (!req.hashManifest) {
      req.hashManifest = getManifest();
    }

    next();
  });

  app.use(express.static(`${__dirname}/public`));
  app.use(helmet());
  app.use(helmet.permittedCrossDomainPolicies());
  app.disable('x-powered-by');
}

app.use(favicon(path.join(__dirname, '..', 'favicon.ico')));

const setResponse = (html, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css';
  const mainBuild = manifest ? manifest['main.js'] : 'assets/app.js';
  const vendorBuild = manifest ? manifest['vendors.js'] : 'assets/vendors.js';
  const modules = 'assets/modules.js'; // dll

  return `
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="utf-8" />
        <title>Mercado Libre</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
        <meta
        name="description"
        content="La comunidad de compra y venta online más grande de América Latina."
        />
        <base href="/" />
        ${
          mainStyles
            ? `<link rel="stylesheet" href="${mainStyles}" type="text/css" />`
            : ''
        }
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;700;800&display=swap" type="text/css" />
        {{CSS}}
      </head>
      <body>
        <div id="app">${html}</div>
        <script src="${modules}" type="text/javascript"></script>
        <script src="${mainBuild}" type="text/javascript"></script>
        <script src="${vendorBuild}" type="text/javascript"></script>
      </body>
    </html>
  `;
};

const renderApp = (req, res) => {
  const sheet = new ServerStyleSheet();

  const markup = renderToString(
    sheet.collectStyles(
      <StaticRouter location={req.url} context={{}}>
        <Layout>{renderRoutes(ROUTES)}</Layout>
      </StaticRouter>,
    ),
  );

  const html = setResponse(markup, req.hashManifest).replace(
    '{{CSS}}',
    sheet.getStyleTags(),
  );

  res.send(html);
};

app.get('*', renderApp);

app.listen(PORT, err => {
  if (err) console.log(err);
  else console.log(`🚀 Magic happens on port ${PORT} 👌`);
});
