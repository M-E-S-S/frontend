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
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact: boolean;
  key: string;
  path: string;
  title: string;
  useLayout: boolean;
}

// Routes
export const routes: IRoute[] = [
  {
    component: Dashboard,
    exact: true,
    key: 'dashboard',
    path: '/dashboard',
    title: 'Dashboard',
    useLayout: true,
  },
  {
    component: Products,
    exact: true,
    key: 'products',
    path: '/products',
    title: 'Products',
    useLayout: true,
  },
  {
    component: Product,
    exact: true,
    key: 'product',
    path: '/products/:id',
    title: 'Product',
    useLayout: true,
  },
];
