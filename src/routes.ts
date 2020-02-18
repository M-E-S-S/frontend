/**
 * Some react router dom typescript examples
 *
 * https://www.pluralsight.com/guides/react-router-typescript
 */
import { RouteComponentProps } from 'react-router-dom';

// Layout
import {
  LayoutPrivate,
  LayoutPublic,
} from './common/layout';

// Components
import Dashboard from './dashboard';
import Products from './products';
import Product from './product';
import NotFound from './notFound';

// Interface
export interface IRoute {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  exact?: boolean;
  key: string;
  layout: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  path: string;
  title: string;
}

export interface IRoutes {
  dashboard: IRoute;
  products: IRoute;
  product: IRoute;
  notFound: IRoute;
}

// Routes
export const routes: IRoutes = {
  dashboard: {
    component: Dashboard,
    exact: true,
    key: 'dashboard',
    layout: LayoutPrivate,
    path: '/dashboard',
    title: 'Dashboard',
  },
  products: {
    component: Products,
    exact: true,
    key: 'products',
    layout: LayoutPrivate,
    path: '/products',
    title: 'Products',
  },
  product: {
    component: Product,
    exact: true,
    key: 'product',
    layout: LayoutPrivate,
    path: '/products/:id',
    title: 'Product',
  },
  notFound: {
    component: NotFound,
    key: 'notfound',
    layout: LayoutPublic,
    path: '*',
    title: 'NotFound',
  },
};
