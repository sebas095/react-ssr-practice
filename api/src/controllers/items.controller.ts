import { Request, Response } from 'express';

import { MLibreService } from '../services/mlibre.service';
import { TError, ErrorType } from '../utils/constants';
import { formatError } from '../utils/formatter';

class ItemsController {
  async get(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const item: TFItem = await MLibreService.getItem(id);
      const itemDescription: string = await MLibreService.getItemDescription(
        id,
      );
      res.status(200).json({
        ...item,
        description: itemDescription,
      });
    } catch (err) {
      const error: TError = formatError(err, ErrorType.MLIBRE_REQUEST_ERROR);
      throw error;
    }
  }
}

export default new ItemsController();
