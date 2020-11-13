import { Request, Response } from 'express';

class HomeController {
  get(req: Request, res: Response) {
    res.json({
      message: 'Welcome to MercadoLibre API 🦄😎!',
      statusCode: 200,
    });
  }
}

export default new HomeController();
