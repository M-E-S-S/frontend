import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../common/theme';
import GlobalStyle from '../common/global';

interface IWrapper {
  children: React.ReactNode,
}

const Wrapper = ({ children }: IWrapper) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

export default Wrapper;
