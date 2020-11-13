import { Router } from 'express';
import SearchController from '@controllers/search.controller';

export default (app: Router, mountPoint: string) => {
  const router: Router = Router();
  router.get('/', SearchController.search);

  app.use(mountPoint, router);
};
