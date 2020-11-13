type TDescriptionItem = object & {
  plain_text: string;
};

type Url = string;

type tag = string;

type TPicture = {
  id: string;
  url: Url;
  secure_url: Url;
  size: string;
  max_size: string;
  quality: string;
};

type TRule = {
  default: boolean;
  free_mode: string;
  free_shipping_flag: boolean;
  value: any;
};

type TFreeMethod = {
  id: number;
  rule: TRule;
};

type TShipping = {
  mode: string;
  free_methods: TFreeMethod[];
  tags: tag[];
  dimensions: any;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
};

type TLocation = {
  id: number;
  name: string;
};

type TPath = {
  id: number;
  name: string;
};

type TAddress = {
  city: {
    name: string;
  };
  state: TLocation;
  country: TLocation;
  search_location: {
    neighborhood: TLocation;
    city: TLocation;
    state: TLocation;
  };
  latitude: number;
  longitude: number;
  id: number;
};

type TItem = {
  id: string;
  title: string;
  category_id: string;
  price: number;
  currency_id: string;
  thumbnail: Url;
  pictures?: TPicture[];
  condition: string;
  shipping: TShipping;
  sold_quantity: number;
  seller_address?: TAddress;
};

type TCategory = object & {
  path_from_root?: TPath[];
};

type TPrice = {
  currency: string;
  decimals: number;
  amount: number;
};

type TFItem = {
  id: string;
  title: string;
  price: TPrice;
  picture: Url;
  condition: string;
  free_shipping: boolean;
  sold_quantity: number;
  address?: string;
  categories?: string[] | undefined;
};

type TFilter = {
  id: string;
  name: string;
  type: string;
  values: TCategory[];
};

type TFilters = TFilter[];

type TResponse = {
  filters: TFilters;
  results: TItem[];
};

type TSearchResponse = {
  categories: string[];
  items: TFItem[];
};
