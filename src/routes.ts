/**
 * Some react router dom typescript examples
 *
 * https://www.pluralsight.com/guides/react-router-typescript
 */
// eslint-disable-next-line no-unused-vars
import { RouteComponentProps } from 'react-router-dom';

// Components
import Dashboard from './dashboard';
import Products from './products';
import Product from './product';

// Interface
export interface IRoute {
  title: string;
  key: string;
  path: string;
  exact: boolean;
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

// Routes
export const routes = [
  {
    component: Dashboard,
    exact: true,
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
  },
  {
    component: Products,
    exact: true,
    key: 'products',
    path: '/products',
    title: 'Products',
  },
  {
    component: Product,
    exact: true,
    key: 'product',
    path: '/products/:id',
    title: 'Product',
  },
];
