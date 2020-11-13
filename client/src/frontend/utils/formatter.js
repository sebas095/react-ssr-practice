export const formatPrice = (price = {}) => {
  // This would print 'ARS', that's why it's commented
  // const currency = price.currency;

  // Instead, we'll use '$'
  const currency = '$';

  return `${currency} ${price.amount}${
    price.decimals > 0 ? `.${price.decimals}` : ''
  }`;
};

export const formatItem = item => ({
  ...item,
  price: formatPrice(item.price),
});

export const formatItems = (items = []) => items.map(item => formatItem(item));
