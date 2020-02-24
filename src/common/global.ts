import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body,
  #root {
    background-color: ${({ theme }: any) => theme.COLORS.gray10};
    color: ${({ theme }: any) => theme.COLORS.black};
    font-family: 'Roboto', sans-serif;
    height: 100%;
    margin: 0;
    min-height: 100%;
  }
`;
