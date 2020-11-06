import loadable from 'react-loadable-visibility/loadable-components';

import Home from '../pages/home';

const Search = loadable(() => import('../pages/search'), { ssr: true });
const ItemDetail = loadable(() => import('../pages/item-detail'), {
  ssr: true,
});
const NotFound = loadable(() => import('../pages/not-found'), { ssr: true });

const ROUTES = [
  {
    path: ['/'],
    key: 'HOME',
    exact: true,
    component: Home,
    auth: false,
  },
  {
    path: ['/search'],
    key: 'SEARCH',
    exact: true,
    component: Search,
    auth: false,
  },
  {
    path: ['/items/:id'],
    key: 'ITEMS',
    exact: true,
    component: ItemDetail,
    auth: false,
  },
  {
    key: 'NOT FOUND',
    component: NotFound,
    auth: false,
  },
];

export default ROUTES;
