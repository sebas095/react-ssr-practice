/* eslint-disable consistent-return */
import { formatItem, formatItems } from '../utils/formatter';

const { API_BASE_URL, RESULTS_LIMIT = 5 } = process.env;

class ApiService {
  static async searchItem(query) {
    try {
      const res = await fetch(
        `${API_BASE_URL}/search?q=${query}&limit=${RESULTS_LIMIT}`,
      );

      const { categories, items } = await res.json();

      return {
        categories,
        items: formatItems(items),
      };
    } catch (error) {
      console.log(error);
    }
  }

  static async getItemDetails(id) {
    try {
      const res = await fetch(`${API_BASE_URL}/items/${id}`);
      const { item } = await res.json();

      return { item: formatItem(item) };
    } catch (error) {
      console.log(error);
    }
  }
}

export default ApiService;
