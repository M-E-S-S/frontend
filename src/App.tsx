import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Routes
/** How is IRoute not used?
 * */
// eslint-disable-next-line no-unused-vars
import { routes, IRoute } from './routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route: IRoute) => (
        <Route
          component={route.component}
          exact={route.exact}
          key={route.key}
          path={route.path}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
