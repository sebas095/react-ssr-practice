import { Router } from 'express';
import HomeController from '@controllers';

export default (app: Router, mountPoint: string) => {
  const router: Router = Router();
  router.get('/', HomeController.get);

  app.use(mountPoint, router);
};
