import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Routes
import { routes, IRoute } from './routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((route: IRoute) => (
        <Route
          exact={route.exact}
          key={route.key}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default App;
