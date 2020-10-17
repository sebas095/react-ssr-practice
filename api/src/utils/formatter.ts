import { TError, ErrorType, defaultError, ErrorValue } from './constants';

const getPicturesFromPictures = (pictures: TPicture[]): Url => {
  return pictures[0].url;
};

const getCategoryNames = (category: TCategory): string[] => {
  if (category?.path_from_root) {
    return category.path_from_root.map(cat => cat.name);
  }

  return [];
};

const formatPrice = (price: number, currencyId: string): TPrice => ({
  currency: currencyId,
  decimals: Number((price % 1).toFixed(2)) * 100,
  amount: price,
});

const getCategoriesFromFilters = (filters: TFilters): string[] => {
  const category: TFilter = filters.filter(
    filter => filter.id === 'category',
  )[0];

  const mainCategory: TCategory = category?.values ? category.values[0] : {};

  return getCategoryNames(mainCategory);
};

export const formatMLibreSearchResults = (
  response: TResponse,
): TSearchResponse => ({
  categories: getCategoriesFromFilters(response.filters),
  items: formatItems(response.results),
});

export const formatItemDescription = (
  descriptionItem: TDescriptionItem,
): string => {
  return descriptionItem.plain_text;
};

export const formatItem = (
  {
    id,
    title,
    price,
    currency_id,
    thumbnail,
    pictures,
    condition,
    shipping,
    sold_quantity,
    seller_address,
  }: TItem,
  category?: TCategory,
): TFItem => ({
  id,
  title,
  price: formatPrice(price, currency_id),
  picture: pictures?.length ? getPicturesFromPictures(pictures) : thumbnail,
  condition,
  free_shipping: shipping.free_shipping,
  sold_quantity,
  address: seller_address?.state?.name,
  categories: category ? getCategoryNames(category) : undefined,
});

export const formatItems = (items: TItem[]): TFItem[] => {
  return items.map(item => formatItem(item));
};

export const formatError = (err: Error, errorType: ErrorType): TError => {
  console.log('error ->', err);
  const error: TError = new Error() as TError;

  error.id = errorType;
  error.statusCode = ErrorValue[errorType]?.statusCode;
  error.message = `${ErrorValue[errorType]?.message || defaultError.message}${
    err?.message ? ` - [${err.message}]` : ''
  }`;

  return error;
};
