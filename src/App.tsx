import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components'

// Routes
import { routes, IRoute } from './routes';

// Components
import Layout from './common/layout';

// Styles
import theme from './common/theme';
import GlobalStyles from './common/global';

const App = () => (
  <BrowserRouter>
    <Switch>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          {routes.map((route: IRoute) => (
            <Route
              component={route.component}
              exact={route.exact}
              key={route.key}
              path={route.path}
            />
          ))}
        </Layout>
      </ThemeProvider>
    </Switch>
  </BrowserRouter>
);

export default App;
