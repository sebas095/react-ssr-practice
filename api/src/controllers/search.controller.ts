import { Request, Response } from 'express';

import { MLibreService } from '@services/mlibre.service';
import { TError, ErrorType } from '@utils/constants';
import { formatError } from '@utils/formatter';

class SearchController {
  async search(req: Request, res: Response) {
    const { q = '', limit = 50 } = req.query;
    try {
      const items: TSearchResponse = await MLibreService.searchItems(
        q as string,
        Number(limit),
      );
      res.status(200).json(items);
    } catch (err) {
      const error: TError = formatError(err, ErrorType.MLIBRE_REQUEST_ERROR);
      throw error;
    }
  }
}

export default new SearchController();
