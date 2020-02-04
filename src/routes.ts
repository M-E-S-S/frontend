/**
 * Some react router dom typescript examples
 *
 * https://www.pluralsight.com/guides/react-router-typescript
 */
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
    title: 'Dashboard',
    key: 'dashboard',
    path: '/dashboard',
    exact: true,
    component: Dashboard,
  },
  {
    title: 'Products',
    key: 'products',
    path: '/products',
    exact: true,
    component: Products,
  },
  {
    title: 'Product',
    key: 'product',
    path: '/products/:id',
    exact: true,
    component: Product,
  },
];
