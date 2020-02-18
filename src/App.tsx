import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// Routes
import { routes, IRoutes } from './routes';

// Styles
import theme from './common/theme';
import GlobalStyles from './common/global';

// App route with layout
const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);

const App = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Switch>
        {Object.keys(routes).map((key: string) => (
          <AppRoute {...routes[key as keyof IRoutes]} />
        ))}
      </Switch>
    </ThemeProvider>
  </BrowserRouter>
);

export default App;
