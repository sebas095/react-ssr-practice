import Home from '../pages/home';

const ROUTES = [
  {
    path: ['/'],
    key: 'HOME',
    exact: true,
    component: Home,
    auth: false,
  },
];

export default ROUTES;
