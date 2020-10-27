import { Router } from 'express';
import itemsController from '../controllers/items.controller';

export default (app: Router, mountPoint: string) => {
  const router: Router = Router();
  router.get('/:id', itemsController.get);

  app.use(mountPoint, router);
};
