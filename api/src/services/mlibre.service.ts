import fetch, { Response } from 'node-fetch';
import {
  formatItem,
  formatItemDescription,
  formatMLibreSearchResults,
} from '@utils/formatter';

const { MLIBRE_BASE_URL, MLIBRE_COUNTRY_PREFIX } = process.env;

export class MLibreService {
  static async searchItems(
    query: string,
    limit: number = 50,
  ): Promise<TSearchResponse> {
    const response: Response = await fetch(
      `${MLIBRE_BASE_URL}/sites/${MLIBRE_COUNTRY_PREFIX}/search?q=${query}&limit=${limit}`,
    );
    const results: TResponse = await response.json();

    return formatMLibreSearchResults(results);
  }

  static async getItem(id: string): Promise<TFItem> {
    console.log({ MLIBRE_BASE_URL });
    const responseItem: Response = await fetch(
      `${MLIBRE_BASE_URL}/items/${id}`,
    );
    const item: TItem = await responseItem.json();

    const responseCategory: Response = await fetch(
      `${MLIBRE_BASE_URL}/categories/${item.category_id}`,
    );
    const category: TCategory = await responseCategory.json();

    return formatItem(item, category);
  }

  static async getItemDescription(id: string): Promise<string> {
    const resṕonse: Response = await fetch(
      `${MLIBRE_BASE_URL}/items/${id}/description`,
    );
    const description: TDescriptionItem = await resṕonse.json();

    return formatItemDescription(description);
  }
}
