import { config } from 'dotenv';
config(); // config environment variables

import express, { Application, Router } from 'express';
import logger from 'morgan';
import cors from 'cors';

import home from './src/routes';
import items from './src/routes/items.routes';
import search from './src/routes/search.routes';

// Middlewares
import { ErrorMiddleware, NotFoundMiddleware } from './src/middlewares';

// Config
const PORT: number = Number(process.env.PORT) || 5000;

const app: Application = express();
const apiRoutes: Router = Router();

// use middlewares
apiRoutes.use(cors());
apiRoutes.use(express.json());
apiRoutes.use(logger('dev'));

// routes
home(apiRoutes, '/');
items(apiRoutes, '/items');
search(apiRoutes, '/search');

app.use('/v1/api', apiRoutes);

app.use(NotFoundMiddleware);
app.use(ErrorMiddleware);

app.listen(PORT, () => {
  console.log(`🚀 API running on port ${PORT}`);
});
